import {
  GTGender,
  GTMember,
  GTMemberType,
} from '@family-dashboard/global/types';

export interface UserState {
  data: GTMember;
}

export const memberDisplayInitialValues: GTMember = {
  email: '',
  familyId: '',
  fullKey: '',
  updatedAt: '',
  createdAt: '',
  memberType: GTMemberType.AdultUser,
  modulePermissions: {
    hasFamilySettings: false,
    hasFinanacial: false,
  },
  personalDetails: {
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    gender: '' as GTGender,
  },
};
