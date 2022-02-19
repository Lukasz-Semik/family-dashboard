import {
  GTMemberModulePermissions,
  GTMemberType,
  GTPersonalDetails,
} from '../misc/misc';
import { CTUserPersonalDetails } from '../user/user';
import { GTInvitationDetails } from './invitation';
import { CTInvitationBaseData } from './invitation';

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

export interface GTInputCreateSignUpInvitation {
  email: string;
  personalDetails: Partial<GTPersonalDetails>;
  invitationDetails: Omit<GTInvitationDetails, 'validTo' | 'code'>;
}

export interface GTInputCreateUserInvitation
  extends GTInputCreateSignUpInvitation {
  memberType: GTMemberType;
  modulePermissions: GTMemberModulePermissions;
}
