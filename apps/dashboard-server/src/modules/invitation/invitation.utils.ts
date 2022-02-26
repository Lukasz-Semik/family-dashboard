import { hash } from 'bcryptjs';
import * as dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import {
  FAMILY_SIGNUP_ID,
  FDFamilyRecordType,
} from '@family-dashboard/global/const';
import { buildHashKey } from '@family-dashboard/global/sdk';
import {
  GTFamilyDBRecord,
  GTInvitationDBRecord,
  GTInvitationDetails,
  GTMemberDBRecord,
  GTMemberModulePermissions,
  GTMemberType,
  GTPersonalDetails,
} from '@family-dashboard/global/types';

import { InputConfirmSignUpInvitation } from '../../schema';

interface RawPayload {
  familyId?: string;
  email: string;
  memberType: GTMemberType;
  modulePermissions: GTMemberModulePermissions;
  personalDetails: GTPersonalDetails;
  invitationDetails: Omit<GTInvitationDetails, 'code' | 'validTo'>;
  code: string;
}

export const buildInvitationDBPayload = (
  rawPayload: RawPayload
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

export interface FamilyAndMemberDBPayloads {
  family: GTFamilyDBRecord;
  member: GTMemberDBRecord;
}

export const buildFamilyAndMemberDBPayloads = async (
  input: InputConfirmSignUpInvitation
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

  const hashedPassword = await hash(input.security.password, 10);
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
    personalDetails: input.personalDetails,
    email: input.email,
    memberType: GTMemberType.AdultUser,
    modulePermissions: {
      hasFamilySettings: true,
      hasFinanacial: true,
    },
    updatedAt: memberDate,
    createdAt: memberDate,
  };

  return {
    family,
    member,
  };
};
