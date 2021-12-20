import { CTGender, CTUserBaseData } from '@family-dashboard/global/types';

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
  };
};
