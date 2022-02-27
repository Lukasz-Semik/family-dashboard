import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';

import {
  CTInvitationErrors,
  GTInvitationDisplay,
  GTMemberType,
  GTVerifyEmailStatus,
} from '@family-dashboard/global/types';

import { throwError } from '../../helpers/throwError';
import { generateNumericCode } from '../../helpers/utils';
import {
  DisplayVerifyEmailResponse,
  InputConfirmSignUpInvitation,
  InputCreateSignUpInvitation,
  InputCreateUserInvitation,
} from '../../schema';
import { serializeInvitationV2 } from '../../serializators/invitation.serializator';
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

  async cancelInvitation(familyId: string, fullKey: string) {
    return this.invitationDb.deleteInvitation(familyId, fullKey);
  }

  async verifyEmail(email: string): Promise<DisplayVerifyEmailResponse> {
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
      await this.invitationDb.createInvitation(
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

  async createUserInvitation(
    familyId: string,
    input: InputCreateUserInvitation
  ): Promise<GTInvitationDisplay> {
    const invitation = buildInvitationDBPayload({
      familyId: familyId,
      email: input.email,
      memberType: input.memberType,
      modulePermissions: input.modulePermissions,
      personalDetails: {
        ...input.personalDetails,
        dob: dayjs(input.personalDetails.dob).utc().toISOString(),
      },
      invitationDetails: input.invitationDetails,
      code: 'validated',
    });

    try {
      await this.invitationDb.createInvitation(invitation);

      return serializeInvitationV2(invitation);
    } catch (err) {
      throwError(err.message);
    }
  }
  //
}
