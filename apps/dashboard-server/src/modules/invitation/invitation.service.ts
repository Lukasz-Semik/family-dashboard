import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcryptjs';
import * as dayjs from 'dayjs';
import { Repository } from 'typeorm';

import {
  CTInvitationErrors,
  CTMemberType,
  CTUserModulePermission,
  CTVerifyEmailResponseStatus,
} from '@family-dashboard/global/types';

import { FamilyEntity } from '../../entities/family.entity';
import { InvitationEntity } from '../../entities/invitation.entity';
import { UserEntity } from '../../entities/user.entity';
import { throwError } from '../../helpers/throwError';
import { generateNumericCode } from '../../helpers/utils';
import {
  InvitationCreateInput,
  InvitationSignUpConfirmInput,
  InvitationSignUpCreateInput,
  InvitationUserConfirmInput,
  VerifyEmailDto,
} from '../../schema';
import { AuthService } from '../auth/auth.service';
import { InvitationDB } from './invitation.db';
import {
  validateConfirmInvitationInput,
  validateCreateInvitationInput,
} from './validators/invitationInput.validator';

@Injectable()
export class InvitationService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(InvitationEntity)
    private readonly invitationRepository: Repository<InvitationEntity>,
    @InjectRepository(FamilyEntity)
    private readonly familyRepository: Repository<FamilyEntity>,
    private readonly authService: AuthService,
    private readonly invitationDb: InvitationDB
  ) {}

  private findFamily = async (familyId: string) =>
    this.familyRepository
      .createQueryBuilder('family')
      .leftJoinAndSelect('family.invitations', 'invitations')
      .leftJoinAndSelect('family.users', 'users')
      .where('family.id = :id', { id: familyId })
      .getOne();

  private getIsInvitationDeprecated(validTo?: string) {
    return dayjs.utc().isAfter(dayjs.utc(validTo));
  }

  private async findExistingInvitation(email: string) {
    const existingInvitation = await this.invitationRepository.findOne({
      email,
    });

    if (!existingInvitation) {
      throwError(CTInvitationErrors.EmailIsNotInvited);
    }

    if (this.getIsInvitationDeprecated(String(existingInvitation?.validTo))) {
      throwError(CTInvitationErrors.InvitationDeprecated);
    }

    return existingInvitation;
  }

  private async createInvitationBase(
    input: InvitationCreateInput & { familyName: string },
    code: string
  ): Promise<InvitationEntity> {
    try {
      if (!validateCreateInvitationInput(input)) {
        throwError(CTInvitationErrors.WrongPayload);
      }
      const existingUser = await this.userRepository.findOne({
        email: input.email,
      });

      if (existingUser) {
        throwError(CTInvitationErrors.EmailAlreadyInUse);
      }

      const existingInvitation = await this.invitationRepository.findOne({
        email: input.email,
      });

      if (existingInvitation) {
        throwError(CTInvitationErrors.EmailAlreadyInvited);
      }

      const savedInvitation = this.invitationRepository.save({
        ...new InvitationEntity(),
        ...input,
        validTo: dayjs.utc().add(2, 'day').toDate(),
        inviterName: input.inviterName,
        code,
      });

      return savedInvitation;
    } catch (err) {
      throwError(err.message);
    }
  }

  async verifyEmail(email: string): Promise<VerifyEmailDto> {
    try {
      const existingUser = await this.userRepository.findOne({ email });

      if (existingUser) {
        return {
          status: CTVerifyEmailResponseStatus.AlreadyCreated,
        };
      }

      const existingInvitation = await this.invitationRepository.findOne({
        email,
      });

      if (this.getIsInvitationDeprecated(String(existingInvitation?.validTo))) {
        return {
          status: CTVerifyEmailResponseStatus.Deprecated,
        };
      }

      if (existingInvitation?.email === email) {
        return {
          status: CTVerifyEmailResponseStatus.SignUpNotFinished,
        };
      }

      if (existingInvitation?.email) {
        return {
          status: CTVerifyEmailResponseStatus.Invited,
          inviterName: existingInvitation.inviterName,
        };
      }

      return {
        status: CTVerifyEmailResponseStatus.Success,
      };
    } catch (err) {
      throwError(err.message);
    }
  }

  async createSignUpInvitation(
    input: InvitationSignUpCreateInput
  ): Promise<boolean> {
    const code = generateNumericCode(4);
    // FUTURE: Send sign up e-mail
    await this.createInvitationBase(
      {
        ...input,
        modulePermissions: [
          CTUserModulePermission.FamilySettings,
          CTUserModulePermission.Financial,
        ],
        memberType: CTMemberType.AdultUser,
      },
      code
    );
    return true;
  }

  async confirmSignUpInvitation(
    input: InvitationSignUpConfirmInput
  ): Promise<UserEntity> {
    try {
      if (!validateConfirmInvitationInput(input)) {
        throwError(CTInvitationErrors.WrongPayload);
      }

      const existingUser = await this.userRepository.findOne({
        email: input.email,
      });

      if (existingUser) {
        throwError(CTInvitationErrors.EmailAlreadyInUse);
      }

      const existingInvitation = await this.findExistingInvitation(input.email);

      if (existingInvitation.code !== input.code) {
        throwError(CTInvitationErrors.CodeInvalid);
      }

      const hashedPassword = await hash(input.password, 10);

      const createdUser = await this.userRepository.save({
        ...new UserEntity(),
        ...input,
        modulePermissions: [
          CTUserModulePermission.FamilySettings,
          CTUserModulePermission.Financial,
        ],
        memberType: CTMemberType.AdultUser,
        dob: dayjs.utc(input.dob).toDate(),
        password: hashedPassword,
      });

      const family = await this.familyRepository.save({
        ...new FamilyEntity(),
        name: existingInvitation.familyName,
        users: [createdUser],
      });

      this.invitationRepository.delete({ email: input.email });

      return { ...createdUser, family };
    } catch (err) {
      throwError(err.message);
    }
  }

  async resendInvitation(email: string): Promise<boolean> {
    const code = generateNumericCode(4);
    // FUTURE: Send resend email
    try {
      const existingInvitation = await this.findExistingInvitation(email);

      this.invitationRepository.save({
        ...existingInvitation,
        validTo: dayjs.utc().add(2, 'day').toDate(),
        code,
      });

      return true;
    } catch (err) {
      throwError(err.message);
    }
  }

  async createUserInvitation(
    input: InvitationCreateInput,
    familyId: string
  ): Promise<InvitationEntity> {
    try {
      const code = generateNumericCode(4);
      // FUTURE: Send invitation sent e-mail
      const foundFamily = await this.findFamily(familyId);
      const invitation = await this.createInvitationBase(
        {
          ...input,
          familyName: foundFamily.name,
        },
        code
      );

      // FUTURE: Send invitation sent e-mail
      const token = this.authService.createToken(
        input.email,
        invitation.id,
        foundFamily.id
      );
      console.log(token);
      const d = this.authService.decodeToken(token.accessToken);
      console.log(d);

      if (!foundFamily) {
        throwError('family not exists');
      }

      this.familyRepository.save({
        ...foundFamily,
        invitations: [invitation, ...foundFamily.invitations],
      });

      return invitation;
    } catch (err) {
      throwError(err.message);
    }
  }

  async getUserInvitation(token: string) {
    const data = this.authService.decodeToken(token);

    return this.findExistingInvitation(data.email);
  }

  async confirmUserInvitation(
    input: InvitationUserConfirmInput,
    token: string
  ) {
    try {
      const data = this.authService.decodeToken(token);

      const foundFamily = await this.findFamily(data.familyId);

      if (!foundFamily) {
        throwError('family not exists');
      }

      const existingInvitation = await this.findExistingInvitation(data.email);

      const hashedPassword = await hash(input.password, 10);

      await this.invitationRepository.delete({
        email: existingInvitation.email,
      });

      const createdUser = await this.userRepository.save({
        ...new UserEntity(),
        ...input,
        email: existingInvitation.email,
        memberType: existingInvitation.memberType,
        modulePermissions: existingInvitation.modulePermissions,
        dob: dayjs.utc(input.dob).toDate(),
        password: hashedPassword,
      });

      const family = await this.familyRepository.save({
        ...foundFamily,
        users: [...foundFamily.users, createdUser],
      });

      return { ...createdUser, family };
    } catch (err) {
      throwError(err.message);
    }
  }

  async cancelUserInvitation(
    emailToRemove: string,
    familyId: string
  ): Promise<boolean> {
    try {
      const foundFamily = await this.findFamily(familyId);

      if (!foundFamily) {
        throwError('family not exists');
      }

      const foundInvitation = foundFamily.invitations.find(
        (invitation) => invitation.email === emailToRemove
      );

      if (!foundInvitation) {
        throwError('invitation not exists');
      }

      this.invitationRepository.delete({ email: emailToRemove });

      return true;
    } catch (err) {
      throwError(err.message);
    }
  }
}
