import { CTGender, CTUserBaseData } from '@family-dashboard/common-types';

import { UserEntity } from '../entities/user.entity';

export const serializeCurrentUser = (user: UserEntity): CTUserBaseData => {
  return {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    middleName: user.middleName,
    lastName: user.lastName,
    gender: user.gender as CTGender,
    dob: user.dob,
  };
};
