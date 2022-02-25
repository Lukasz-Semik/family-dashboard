import { splitHashKey } from '@family-dashboard/global/sdk';
import {
  GTMemberDBRecord,
  GTMemberDisplay,
} from '@family-dashboard/global/types';

export const serializeMember = (
  memberDBRecord: GTMemberDBRecord
): GTMemberDisplay => ({
  fullKey: memberDBRecord.fullKey,
  familyId: memberDBRecord.familyId,
  personalDetails: memberDBRecord.personalDetails,
  createdAt: splitHashKey(memberDBRecord.createdAt).data,
  updatedAt: splitHashKey(memberDBRecord.updatedAt).data,
  email: memberDBRecord.email,
  memberType: memberDBRecord.memberType,
  modulePermissions: memberDBRecord.modulePermissions,
});
