import { hash } from 'bcryptjs';
import * as dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import {
  FAMILY_SIGNUP_ID,
  FDFamilyRecordType,
} from '@family-dashboard/global/const';
import { buildHashKey } from '@family-dashboard/global/sdk';
import {
  GTConfirmSignUpInvitationInput,
  GTInvitationDetails,
  GTMemberType,
  GTModulePermissions,
  GTPersonalDetails,
} from '@family-dashboard/global/types';

import { FamilyDBModel } from '../../dbModels/family.dbModel';
import { InvitationDBModel } from '../../dbModels/invitation.dbModel';
import { MemberDBModel } from '../../dbModels/member.dbModel';

interface RawPayloadInvitation {
  familyId?: string;
  email: string;
  memberType: GTMemberType;
  modulePermissions: GTModulePermissions;
  personalDetails: GTPersonalDetails;
  details: GTInvitationDetails;
  code: string;
}

export const buildInvitationDBPayload = (
  rawPayload: RawPayloadInvitation
): InvitationDBModel => {
  const date = buildHashKey(
    FDFamilyRecordType.Invitation,
    dayjs().utc().toISOString()
  );

  const record: InvitationDBModel = {
    familyId: rawPayload.familyId || FAMILY_SIGNUP_ID,
    fullKey: buildHashKey(FDFamilyRecordType.Invitation, uuidv4()),
    createdAt: date,
    updatedAt: date,
    email: rawPayload.email,
    personalDetails: rawPayload.personalDetails,
    details: {
      ...rawPayload.details,
    },
    security: {
      code: rawPayload.code,
    },
    validTo: dayjs.utc().add(2, 'day').toISOString(),
    memberType: rawPayload.memberType,
    modulePermissions: rawPayload.modulePermissions,
  };

  return record;
};

interface RawPaylodMember {
  email: string;
  security: {
    password: string;
  };
  personalDetails: GTPersonalDetails;
  memberType: GTMemberType;
  modulePermissions: GTModulePermissions;
}

export const buildMemberDBPayload = async (
  familyId: string,
  rawPayload: RawPaylodMember
): Promise<MemberDBModel> => {
  const hashedPassword = await hash(rawPayload.security.password, 10);
  const memberDate = buildHashKey(
    FDFamilyRecordType.Member,
    dayjs().utc().toISOString()
  );

  const memberId = uuidv4();

  const member: MemberDBModel = {
    familyId,
    fullKey: buildHashKey(FDFamilyRecordType.Member, memberId),
    security: {
      password: hashedPassword,
    },
    personalDetails: rawPayload.personalDetails,
    email: rawPayload.email,
    memberType: GTMemberType.AdultUser,
    modulePermissions: {
      hasFamilySettings: rawPayload.modulePermissions.hasFamilySettings,
      hasFinanacial: rawPayload.modulePermissions.hasFinanacial,
    },
    updatedAt: memberDate,
    createdAt: memberDate,
  };

  return member;
};

export interface FamilyAndMemberDBPayloads {
  family: FamilyDBModel;
  member: MemberDBModel;
}

export const buildFamilyAndMemberDBPayloads = async (
  input: GTConfirmSignUpInvitationInput
): Promise<FamilyAndMemberDBPayloads> => {
  const { password, ...restInput } = input;

  const familyDate = buildHashKey(
    FDFamilyRecordType.Family,
    dayjs().utc().toISOString()
  );

  const familyId = uuidv4();

  const family: FamilyDBModel = {
    familyId,
    fullKey: buildHashKey(FDFamilyRecordType.Family, familyId),
    details: {
      name: input.familyName,
    },
    createdAt: familyDate,
    updatedAt: familyDate,
  };

  const member = await buildMemberDBPayload(familyId, {
    ...input,
    memberType: GTMemberType.AdultUser,
    modulePermissions: {
      hasFamilySettings: true,
      hasFinanacial: true,
    },
    security: {
      password,
    },
  });

  return {
    family,
    member,
  };
};
