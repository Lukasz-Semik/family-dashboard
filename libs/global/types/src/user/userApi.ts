import { CTFamilyBaseData } from '../family/family';
import { CTUserBaseData } from './user';

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

export interface CTVerifyEmailResponse {
  status: CTVerifyEmailResponseStatus;
  inviterName?: string;
}

export interface CTConfirmInvitationInput extends Omit<CTUserBaseData, 'id'> {
  password: string;
  code: string;
  familyName: string;
}

export interface CTCreateInvitationInput
  extends Partial<Omit<CTConfirmInvitationInput, 'password'>> {
  email: string;
  inviterName: string;
}

export interface CTLoginResponse {
  accessToken: string;
}

export interface CTInitialAppStateResponse {
  currentUser: CTUserBaseData;
  family: CTFamilyBaseData;
}
