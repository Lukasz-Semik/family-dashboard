import {
  CTGender,
  CTMemberType,
  CTUserBaseData,
  CTUserModulePermission,
} from '@family-dashboard/global/types';

import { UserEntity } from '../entities/user.entity';

export const serializeUser = (user: UserEntity): CTUserBaseData => {
  return {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    middleName: user.middleName,
    lastName: user.lastName,
    gender: user.gender as CTGender,
    dob: user.dob,
    modulePermissions: user.modulePermissions as CTUserModulePermission[],
    memberType: user.memberType as CTMemberType,
  };
};
