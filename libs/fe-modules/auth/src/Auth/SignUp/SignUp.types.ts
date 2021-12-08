import { CTGender } from '@family-dashboard/global/types';

export enum SignUpStep {
  Email = 'Email',
  FamilyName = 'FamilyName',
  PersonalDetails1 = 'PersonalDetails1',
  PersonalDetails2 = 'PersonalDetails2',
  Password = 'Password',
  ConfirmEmail = 'ConfirmEmail',
  FinalStep = 'FinalStep',
  EmailVerificationFailed = 'EmailVerificationFailed',
}

export interface Values {
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  familyName: string;
  isConsentGiven: boolean;
  isLastNameDifferent: boolean;
  gender: CTGender | undefined;
  dob: string;
  password: string;
  code0: string;
  code1: string;
  code2: string;
  code3: string;
}
