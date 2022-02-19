import * as dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import {
  FAMILY_SIGNUP_ID,
  FDFamilyRecordType,
} from '@family-dashboard/global/const';
import {
  GTInvitationDBRecord,
  GTInvitationDetails,
  GTMemberModulePermissions,
  GTMemberType,
  GTPersonalDetails,
} from '@family-dashboard/global/types';

interface RawPayload {
  familyId?: string;
  email: string;
  memberType: GTMemberType;
  modulePermissions: GTMemberModulePermissions;
  personalDetails: Partial<GTPersonalDetails>;
  invitationDetails: Omit<GTInvitationDetails, 'code' | 'validTo'>;
  code: string;
}

export const prepareCreateInvitationDBRecord = (
  rawPayload: RawPayload
): GTInvitationDBRecord => {
  const timestamp = dayjs().utc().valueOf();
  const date = dayjs(timestamp).toISOString();

  const record: GTInvitationDBRecord = {
    familyId: rawPayload.familyId || FAMILY_SIGNUP_ID,
    type: `${FDFamilyRecordType.Invitation}.${timestamp}`,
    invitationId: uuidv4(),
    email: rawPayload.email,
    personalDetails: rawPayload.personalDetails,
    invitationDetails: {
      ...rawPayload.invitationDetails,
      validTo: dayjs.utc().add(2, 'day').toISOString(),
      code: rawPayload.code,
    },
    memberType: rawPayload.memberType,
    modulePermissions: rawPayload.modulePermissions,
    createdAt: date,
    updatedAt: date,
  };

  return record;
};
