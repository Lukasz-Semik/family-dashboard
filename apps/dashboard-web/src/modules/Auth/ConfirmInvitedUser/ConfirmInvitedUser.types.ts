import { CTGender } from '@family-dashboard/global/types';

export enum ConfirmInvitedUserStep {
  InitialStep = 'InitialStep',
  PersonalDetails1 = 'PersonalDetails1',
  PersonalDetails2 = 'PersonalDetails2',
  Password = 'Password',
  FinalStep = 'FinalStep',
  Error = 'Error',
}

export interface Values {
  firstName: string;
  middleName: string;
  lastName: string;
  gender: CTGender | undefined;
  dob: string;
  password: string;
}
