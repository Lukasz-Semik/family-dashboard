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
}
