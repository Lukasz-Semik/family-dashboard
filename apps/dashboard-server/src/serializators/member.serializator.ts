import { splitHashKey } from '@family-dashboard/global/sdk';
import { GTMember } from '@family-dashboard/global/types';

import { MemberDBModel } from '../dbModels/member.dbModel';

export const serializeMember = (memberDBModel: MemberDBModel): GTMember => ({
  fullKey: memberDBModel.fullKey,
  familyId: memberDBModel.familyId,
  personalDetails: memberDBModel.personalDetails,
  createdAt: splitHashKey(memberDBModel.createdAt).data,
  updatedAt: splitHashKey(memberDBModel.updatedAt).data,
  email: memberDBModel.email,
  memberType: memberDBModel.memberType,
  modulePermissions: memberDBModel.modulePermissions,
});
