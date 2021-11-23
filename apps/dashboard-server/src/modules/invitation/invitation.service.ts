import { CTCTVerifyEmailResponseStatus } from '@family-dashboard/common-types';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcryptjs';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import { Repository } from 'typeorm';

import { FamilyEntity } from '@dashboard-server/entities/family.entity';
import { InvitationEntity } from '@dashboard-server/entities/invitation.entity';
import { UserEntity } from '@dashboard-server/entities/user.entity';
import { throwError } from '@dashboard-server/helpers/throwError';
import { generateNumericCode } from '@dashboard-server/helpers/utils';
import {
  CreateInvitationInput,
  CTConfirmInvitationInput,
  VerifyEmailDto,
} from '@dashboard-server/schema';

dayjs.extend(utc);

@Injectable()
export class InvitationService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(InvitationEntity)
    private readonly invitationRepository: Repository<InvitationEntity>,
    @InjectRepository(FamilyEntity)
    private readonly familyRepository: Repository<FamilyEntity>
  ) {}

  private getIsInvitationDeprecated(validTo?: string) {
    return dayjs.utc().isAfter(dayjs.utc(validTo));
  }

  async verifyEmail(email: string): Promise<VerifyEmailDto> {
    try {
      const existingUser = await this.userRepository.findOne({ email });

      if (existingUser) {
        return {
          status: CTCTVerifyEmailResponseStatus.AlreadyCreated,
        };
      }

      const existingInvitation = await this.invitationRepository.findOne({
        email,
      });

      if (this.getIsInvitationDeprecated(String(existingInvitation?.validTo))) {
        return {
          status: CTCTVerifyEmailResponseStatus.Deprecated,
        };
      }

      if (existingInvitation?.email === email) {
        return {
          status: CTCTVerifyEmailResponseStatus.SignUpNotFinished,
        };
      }

      if (existingInvitation?.email) {
        return {
          status: CTCTVerifyEmailResponseStatus.Invited,
          inviterName: existingInvitation.inviterName,
        };
      }

      return {
        status: CTCTVerifyEmailResponseStatus.Success,
      };
    } catch (err) {
      throwError(HttpStatus.INTERNAL_SERVER_ERROR, err);
    }
  }

  async createInvitationBase(
    input: CreateInvitationInput,
    code: string
  ): Promise<boolean> {
    // TODO: add validations
    try {
      const existingUser = await this.userRepository.findOne({
        email: input.email,
      });

      if (existingUser) {
        throwError(HttpStatus.CONFLICT, { msg: 'Email already in use' });
      }

      const existingInvitation = await this.invitationRepository.findOne({
        email: input.email,
      });

      if (existingInvitation) {
        throwError(HttpStatus.CONFLICT, { msg: 'Email already invited' });
      }

      this.invitationRepository.save({
        ...new InvitationEntity(),
        ...input,
        validTo: dayjs.utc().add(2, 'day').toDate(),
        inviterName: input.inviterName,
        code,
      });

      return true;
    } catch (err) {
      throwError(HttpStatus.INTERNAL_SERVER_ERROR, err);
    }
  }

  async createSignUpInvitation(input: CreateInvitationInput): Promise<boolean> {
    const code = generateNumericCode(4);
    // FUTURE: Send sign up e-mail
    return this.createInvitationBase(input, code);
  }

  async confirmSignUpInvitation(
    input: CTConfirmInvitationInput
  ): Promise<boolean> {
    try {
      const existingUser = await this.userRepository.findOne({
        email: input.email,
      });

      if (existingUser) {
        throwError(HttpStatus.CONFLICT, { msg: 'Email already in use' });
      }

      const existingInvitation = await this.invitationRepository.findOne({
        email: input.email,
      });

      if (!existingInvitation) {
        throwError(HttpStatus.NOT_FOUND, { msg: 'Email is not invited' });
      }

      if (this.getIsInvitationDeprecated(String(existingInvitation?.validTo))) {
        throwError(HttpStatus.BAD_REQUEST, { msg: 'Invitation deprecated' });
      }

      if (existingInvitation.code !== input.code) {
        throwError(HttpStatus.BAD_REQUEST, { msg: 'Code is invalid' });
      }

      const { familyName, ...userInput } = input;

      const hashedPassword = await hash(input.password, 10);

      const createdUser = await this.userRepository.save({
        ...new UserEntity(),
        ...userInput,
        dob: dayjs.utc(input.dob).toDate(),
        password: hashedPassword,
      });

      this.familyRepository.save({
        ...new FamilyEntity(),
        name: familyName,
        users: [createdUser],
      });

      this.invitationRepository.delete({ email: input.email });

      return true;
    } catch (err) {
      throwError(HttpStatus.INTERNAL_SERVER_ERROR, err);
    }
  }
}
