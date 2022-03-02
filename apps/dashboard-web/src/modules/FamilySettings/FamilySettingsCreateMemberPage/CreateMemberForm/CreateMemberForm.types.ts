import { GTGender } from '@family-dashboard/global/types';

export interface Values {
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: GTGender | undefined;
  dob: string;
  hasFamilySettingsModulePermission: boolean;
  hasFinancialModulePermission: boolean;
}
