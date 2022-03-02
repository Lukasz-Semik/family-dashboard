import {
  GTMemberSecurityDBRecord,
  GTMemberType,
  GTModulePermissionsDisplay,
  GTPersonalDetailsDisplay,
} from '../member/member';
import { CTUserPersonalDetails } from '../user/user';
import {
  CTInvitationBaseData,
  GTInvitationDetailsDBRecord,
} from './invitation';

export enum CTVerifyEmailResponseStatus {
  Success = 'Success',
  Invited = 'Invited',
  Deprecated = 'Deprecated',
  SignUpNotFinished = 'SignUpNotFinished',
  AlreadyCreated = 'AlreadyCreated',
}

// TODODB -> verify usage
export enum CTInvitationErrors {
  EmailAlreadyInUse = 'EmailAlreadyInUse',
  EmailAlreadyInvited = 'EmailAlreadyInvited',
  EmailIsNotInvited = 'EmailIsNoteInvited',
  InvitationDeprecated = 'InvitationDeprecated',
  NotExist = 'NotExist',
  CodeInvalid = 'CodeInvalid',
  WrongPayload = 'WrongPayload',
}

export type CTInvitationCreateInput = Omit<
  CTInvitationBaseData,
  'validTo' | 'familyName'
>;

export type CTInvitationSignUpCreateInput = Omit<
  CTInvitationBaseData,
  'modulePermissions' | 'memberType' | 'validTo'
>;

export interface CTInvitationSignUpConfirmInput extends CTUserPersonalDetails {
  password: string;
  code: string;
}

export type CTInvitationUserConfirmInput = Omit<
  CTInvitationSignUpConfirmInput,
  'code' | 'email'
>;

export interface CTVerifyEmailResponse {
  status: CTVerifyEmailResponseStatus;
  inviterName?: string;
}

// V2
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
  personalDetails: GTPersonalDetailsDisplay;
  invitationDetails: Omit<GTInvitationDetailsDBRecord, 'validTo' | 'code'>;
}

export interface GTConfirmSignUpInvitationInput {
  email: string;
  security: GTMemberSecurityDBRecord;
  personalDetails: GTPersonalDetailsDisplay;
  invitationDetails: Omit<
    GTInvitationDetailsDBRecord,
    'validTo' | 'inviterEmail' | 'inviterName'
  >;
}

export interface GTCreateUserInvitationInput
  extends GTCreateSignUpInvitationInput {
  memberType: GTMemberType;
  modulePermissions: GTModulePermissionsDisplay;
}

export type GTConfirmUserInvitationInput = Omit<
  GTConfirmSignUpInvitationInput,
  'invitationDetails'
>;
