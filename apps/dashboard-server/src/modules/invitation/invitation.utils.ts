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
  GTFamilyDBRecord,
  GTInvitationDBRecord,
  GTInvitationDetailsDBRecord,
  GTMemberDBRecord,
  GTMemberSecurityDBRecord,
  GTMemberType,
  GTModulePermissionsDisplay,
  GTPersonalDetailsDisplay,
} from '@family-dashboard/global/types';

interface RawPayloadInvitation {
  familyId?: string;
  email: string;
  memberType: GTMemberType;
  modulePermissions: GTModulePermissionsDisplay;
  personalDetails: GTPersonalDetailsDisplay;
  invitationDetails: Omit<GTInvitationDetailsDBRecord, 'code' | 'validTo'>;
  code: string;
}

export const buildInvitationDBPayload = (
  rawPayload: RawPayloadInvitation
): GTInvitationDBRecord => {
  const date = buildHashKey(
    FDFamilyRecordType.Invitation,
    dayjs().utc().toISOString()
  );

  const record: GTInvitationDBRecord = {
    familyId: rawPayload.familyId || FAMILY_SIGNUP_ID,
    fullKey: buildHashKey(FDFamilyRecordType.Invitation, uuidv4()),
    createdAt: date,
    updatedAt: date,
    email: rawPayload.email,
    personalDetails: rawPayload.personalDetails,
    invitationDetails: {
      ...rawPayload.invitationDetails,
      validTo: dayjs.utc().add(2, 'day').toISOString(),
      code: rawPayload.code,
    },
    memberType: rawPayload.memberType,
    modulePermissions: rawPayload.modulePermissions,
  };

  return record;
};

interface RawPaylodMember {
  email: string;
  security: GTMemberSecurityDBRecord;
  personalDetails: GTPersonalDetailsDisplay;
  memberType: GTMemberType;
  modulePermissions: GTModulePermissionsDisplay;
}

export const buildMemberDBPayload = async (
  familyId: string,
  rawPayload: RawPaylodMember
): Promise<GTMemberDBRecord> => {
  const hashedPassword = await hash(rawPayload.security.password, 10);
  const memberDate = buildHashKey(
    FDFamilyRecordType.Member,
    dayjs().utc().toISOString()
  );

  const memberId = uuidv4();

  const member: GTMemberDBRecord = {
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
  family: GTFamilyDBRecord;
  member: GTMemberDBRecord;
}

export const buildFamilyAndMemberDBPayloads = async (
  input: GTConfirmSignUpInvitationInput
): Promise<FamilyAndMemberDBPayloads> => {
  const familyDate = buildHashKey(
    FDFamilyRecordType.Family,
    dayjs().utc().toISOString()
  );

  const familyId = uuidv4();

  const family: GTFamilyDBRecord = {
    familyId,
    fullKey: buildHashKey(FDFamilyRecordType.Family, familyId),
    familyDetails: {
      name: input.invitationDetails.familyName,
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
  });

  return {
    family,
    member,
  };
};
