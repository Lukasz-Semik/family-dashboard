import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcryptjs';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import { Repository } from 'typeorm';

import { CTVerifyEmailResponseStatus } from '@family-dashboard/global/types';

import { FamilyEntity } from '../../entities/family.entity';
import { InvitationEntity } from '../../entities/invitation.entity';
import { UserEntity } from '../../entities/user.entity';
import { throwError } from '../../helpers/throwError';
import { generateNumericCode } from '../../helpers/utils';
import {
  ConfirmInvitationInput,
  CreateInvitationInput,
  VerifyEmailDto,
} from '../../schema';

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
    input: ConfirmInvitationInput
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
