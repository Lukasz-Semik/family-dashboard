import {
  GTGender,
  GTMemberDisplay,
  GTMemberType,
} from '@family-dashboard/global/types';

export interface UserState {
  data: GTMemberDisplay;
}

export const memberDisplayInitialValues: GTMemberDisplay = {
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
