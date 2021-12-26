import { CTUserPersonalDetails } from '../user/user';
import { CTInvitationBaseData } from './invitation';

export enum CTVerifyEmailResponseStatus {
  Success = 'Success',
  Invited = 'Invited',
  Deprecated = 'Deprecated',
  SignUpNotFinished = 'SignUpNotFinished',
  AlreadyCreated = 'AlreadyCreated',
}

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

export interface CTInvitationConfirmInput extends CTUserPersonalDetails {
  password: string;
  code: string;
}

export interface CTVerifyEmailResponse {
  status: CTVerifyEmailResponseStatus;
  inviterName?: string;
}
