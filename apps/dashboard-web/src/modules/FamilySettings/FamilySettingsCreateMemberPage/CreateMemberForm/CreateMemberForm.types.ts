import { CTGender } from '@family-dashboard/global/types';

export interface Values {
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: CTGender | undefined;
  dob: string;
  hasFamilySettingsModulePermission: boolean;
  hasFinancialModulePermission: boolean;
}
