import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';

import {
  GTGender,
  GTMemberType,
  GTVerifyEmailStatus,
} from '@family-dashboard/global/types';

import { throwError } from '../../helpers/throwError';
import { generateNumericCode } from '../../helpers/utils';
import {
  InputCreateSignUpInvitation,
  VerifyEmailResponseDto,
} from '../../schema';
import { AuthService } from '../auth/auth.service';
import { InvitationDB } from './invitation.db';
import { prepareCreateInvitationDBRecord } from './invitation.utils';

@Injectable()
export class InvitationServiceV2 {
  constructor(
    private readonly invitationDb: InvitationDB,
    private readonly authService: AuthService
  ) {}

  private getIsInvitationDeprecated(validTo?: string) {
    return dayjs.utc().isAfter(dayjs.utc(validTo));
  }

  async verifyEmail(email: string): Promise<VerifyEmailResponseDto> {
    try {
      // // TEST:
      // const a = await this.invitationDb.createInvitation(
      //   prepareCreateInvitationDBRecord({
      //     familyId: undefined,
      //     email: 'x@gmail.com',
      //     memberType: GTMemberType.AdultUser,
      //     modulePermissions: {
      //       hasFamilySettings: true,
      //       hasFinanacial: true,
      //     },
      //     personalDetails: {
      //       firstName: 'Shaki',
      //       middleName: '',
      //       lastName: 'Semik',
      //       dob: dayjs('2000-12-03').utc().toISOString(),
      //       gender: GTGender.Male,
      //     },
      //     invitationDetails: {
      //       familyName: 'Semik',
      //       inviterEmail: 'djpluki@gmail.com',
      //       inviterName: 'Łukasz',
      //     },
      //     code: '1234',
      //   })
      // );
      // console.log(a);
      const existingMember = await this.invitationDb.getMemberByEmail(email);

      if (existingMember) {
        return {
          status: GTVerifyEmailStatus.AlreadyCreated,
        };
      }

      const existingInvitation = await this.invitationDb.getInvitationByEmail(
        email
      );

      if (
        this.getIsInvitationDeprecated(
          String(existingInvitation?.invitationDetails?.validTo)
        )
      ) {
        return {
          status: GTVerifyEmailStatus.Deprecated,
        };
      }

      if (existingInvitation?.invitationDetails?.inviterEmail === email) {
        return {
          status: GTVerifyEmailStatus.SignUpNotFinished,
        };
      }

      if (existingInvitation?.email) {
        return {
          status: GTVerifyEmailStatus.Invited,
          inviterName: existingInvitation?.invitationDetails?.inviterName,
        };
      }

      return {
        status: GTVerifyEmailStatus.Success,
      };
    } catch (err) {
      throwError(err.message);
    }
  }

  async createSignUpInvitation(
    input: InputCreateSignUpInvitation
  ): Promise<boolean> {
    const code = generateNumericCode(4);

    return true;
  }
}
