import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';

import {
  CTInvitationErrors,
  GTMemberType,
  GTVerifyEmailStatus,
} from '@family-dashboard/global/types';

import { throwError } from '../../helpers/throwError';
import { generateNumericCode } from '../../helpers/utils';
import {
  InputConfirmSignUpInvitation,
  InputCreateSignUpInvitation,
  VerifyEmailResponseDto,
} from '../../schema';
import { InvitationDB } from './invitation.db';
import {
  buildFamilyAndMemberDBPayloads,
  buildInvitationDBPayload,
  FamilyAndMemberDBPayloads,
} from './invitation.utils';

@Injectable()
export class InvitationServiceV2 {
  constructor(private readonly invitationDb: InvitationDB) {}

  private getIsInvitationDeprecated(validTo?: string) {
    return dayjs.utc().isAfter(dayjs.utc(validTo));
  }

  async verifyEmail(email: string): Promise<VerifyEmailResponseDto> {
    try {
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

    try {
      const response = await this.invitationDb.createInvitation(
        buildInvitationDBPayload({
          familyId: undefined,
          email: input.email,
          memberType: GTMemberType.AdultUser,
          modulePermissions: {
            hasFamilySettings: true,
            hasFinanacial: true,
          },
          personalDetails: {
            ...input.personalDetails,
            dob: dayjs(input.personalDetails.dob).utc().toISOString(),
          },
          invitationDetails: input.invitationDetails,
          code,
        })
      );
    } catch (err) {
      throwError(err.message);
    }

    return true;
  }

  async confirmSignUpInvitation(
    input: InputConfirmSignUpInvitation
  ): Promise<FamilyAndMemberDBPayloads> {
    try {
      const existingInvitation = await this.invitationDb.getInvitationByEmail(
        input.email
      );

      if (!existingInvitation?.email) {
        throwError(CTInvitationErrors.InvitationDeprecated);
      }

      if (
        existingInvitation?.invitationDetails?.code !==
        input.invitationDetails?.code
      ) {
        throwError(CTInvitationErrors.CodeInvalid);
      }

      const records = await buildFamilyAndMemberDBPayloads(input);

      await this.invitationDb.createFamily(records.family);
      await this.invitationDb.createMember(records.member);

      this.invitationDb.deleteInvitation(
        existingInvitation.familyId,
        existingInvitation.fullKey
      );

      return records;
    } catch (err) {
      throwError(err.message);
    }
  }
}
