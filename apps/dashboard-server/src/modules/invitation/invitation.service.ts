import { Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import * as dayjs from 'dayjs';

import {
  GTInvitationDisplay,
  GTInvitationErrors,
  GTMemberDBRecord,
  GTMemberType,
  GTVerifyEmailStatus,
} from '@family-dashboard/global/types';

import { throwError } from '../../helpers/throwError';
import { generateNumericCode } from '../../helpers/utils';
import {
  DisplayVerifyEmailResponse,
  InputConfirmSignUpInvitation,
  InputConfirmUserInvitation,
  InputCreateSignUpInvitation,
  InputCreateUserInvitation,
} from '../../schema';
import { serializeInvitation } from '../../serializators/invitation.serializator';
import { AuthService } from '../auth/auth.service';
import { InvitationDB } from './invitation.db';
import {
  buildFamilyAndMemberDBPayloads,
  buildInvitationDBPayload,
  buildMemberDBPayload,
  FamilyAndMemberDBPayloads,
} from './invitation.utils';

@Injectable()
export class InvitationService {
  constructor(
    private readonly invitationDb: InvitationDB,
    private readonly authService: AuthService
  ) {}

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
        throwError(GTInvitationErrors.InvitationDeprecated);
      }

      if (
        existingInvitation?.invitationDetails?.code !==
        input.invitationDetails?.code
      ) {
        throwError(GTInvitationErrors.CodeInvalid);
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

    // FUTURE: Send invitation sent e-mail
    const token = this.authService.createToken(
      input.email,
      invitation.fullKey,
      familyId
    );
    console.log(token);

    try {
      await this.invitationDb.createInvitation(invitation);

      return serializeInvitation(invitation);
    } catch (err) {
      throwError(err.message);
    }
  }

  async confirmUserInvitation(
    token: string,
    input: InputConfirmUserInvitation
  ): Promise<GTMemberDBRecord> {
    try {
      const tokenData = this.authService.decodeToken(token);

      const existingInvitation = await this.invitationDb.getInvitationByEmail(
        tokenData.email
      );

      if (!existingInvitation?.email) {
        throwError(GTInvitationErrors.InvitationDeprecated);
      }

      const hashedPassword = await hash(input.security.password, 10);

      const member = await buildMemberDBPayload(tokenData.familyId, {
        personalDetails: input.personalDetails,
        email: input.email,
        security: {
          password: hashedPassword,
        },
        memberType: existingInvitation.memberType,
        modulePermissions: existingInvitation.modulePermissions,
      });

      await this.invitationDb.createMember(member);

      this.invitationDb.deleteInvitation(
        existingInvitation.familyId,
        existingInvitation.fullKey
      );

      return member;
    } catch (err) {
      throwError(err.message);
    }
  }

  async getUserInvitation(token: string): Promise<GTInvitationDisplay> {
    const tokenData = this.authService.decodeToken(token);

    const invitation = await this.invitationDb.getInvitationByEmail(
      tokenData.email
    );

    return serializeInvitation(invitation);
  }
}
