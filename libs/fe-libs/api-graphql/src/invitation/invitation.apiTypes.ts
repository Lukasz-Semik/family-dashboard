import {
  GTConfirmSignUpInvitationInput,
  GTConfirmUserInvitationInput,
  GTCreateSignUpInvitationInput,
  GTCreateUserInvitationInput,
  GTInvitation,
  GTLoginDisplay,
  GTPersonalDetails,
  GTVerifyEmailResponse,
} from '@family-dashboard/global/types';

export interface APICreateSignUpInvitationVariables {
  input: GTCreateSignUpInvitationInput;
}

export interface APICreateSignUpInvitationResponse {
  createSignUpInvitation: boolean;
}

export interface APIConfirmSignUpInvitationVariables {
  input: GTConfirmSignUpInvitationInput;
}

export interface APIConfirmSignUpInvitationResponse {
  confirmSignUpInvitation: GTLoginDisplay;
}

export interface APICancelInvitationVariables {
  fullKey: string;
}

export interface APICancelInvitationResponse {
  cancelInvitation: boolean;
}

export interface APICreateUserInvitationVariables {
  input: GTCreateUserInvitationInput;
}

export interface APICreateUserInvitationResponse {
  createUserInvitation: Pick<
    GTInvitation,
    'email' | 'fullKey' | 'validTo' | 'details'
  > & {
    personalDetails: Pick<GTPersonalDetails, 'firstName'>;
  };
}

export interface APIConfirmUserInvitationVariables {
  input: GTConfirmUserInvitationInput;
  token: string;
}

export interface APIConfirmUserInvitationResponse {
  confirmUserInvitation: GTLoginDisplay;
}

export interface APIResendSignUpCodeVariables {
  email: string;
}

export interface APIResendSignUpCodeResponse {
  resendInvitation: boolean;
}

export interface APIVerifySignUpEmailVariables {
  email: string;
}

export interface APIVerifySignUpEmailResponse {
  verifySignUpEmail: GTVerifyEmailResponse;
}

export interface APIGetUserInvitationResponse {
  getUserInvitation: Pick<
    GTInvitation,
    'email' | 'details' | 'personalDetails'
  >;
}

export interface APIGetUserInvitationVariables {
  token: string;
}
