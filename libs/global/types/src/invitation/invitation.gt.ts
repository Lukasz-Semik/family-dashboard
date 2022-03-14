import {
  GTMemberType,
  GTModulePermissions,
  GTPersonalDetails,
} from '../member/member.gt';

export interface GTInvitationDetails {
  inviterEmail: string;
  inviterName: string;
  familyName: string;
}

export interface GTInvitation {
  familyId: string;
  fullKey: string;
  email: string;
  details: GTInvitationDetails;
  personalDetails: GTPersonalDetails;
  validTo: string;
}

export enum GTInvitationErrors {
  EmailAlreadyInUse = 'EmailAlreadyInUse',
  EmailAlreadyInvited = 'EmailAlreadyInvited',
  EmailIsNotInvited = 'EmailIsNoteInvited',
  InvitationDeprecated = 'InvitationDeprecated',
  NotExist = 'NotExist',
  CodeInvalid = 'CodeInvalid',
  WrongPayload = 'WrongPayload',
}

export enum GTVerifyEmailStatus {
  Success = 'Success',
  Invited = 'Invited',
  Deprecated = 'Deprecated',
  SignUpNotFinished = 'SignUpNotFinished',
  AlreadyCreated = 'AlreadyCreated',
}

export interface GTVerifyEmailResponse {
  status: GTVerifyEmailStatus;
  inviterName?: string;
}

export interface GTCreateSignUpInvitationInput {
  email: string;
  personalDetails: GTPersonalDetails;
  details: GTInvitationDetails;
}

export interface GTConfirmSignUpInvitationInput {
  email: string;
  password: string;
  personalDetails: GTPersonalDetails;
  familyName: string;
  code: string;
}

export interface GTCreateUserInvitationInput
  extends GTCreateSignUpInvitationInput {
  memberType: GTMemberType;
  modulePermissions: GTModulePermissions;
}

export type GTConfirmUserInvitationInput = Omit<
  GTConfirmSignUpInvitationInput,
  'familyName' | 'code'
>;
