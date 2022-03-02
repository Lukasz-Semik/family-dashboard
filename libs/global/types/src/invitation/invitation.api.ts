import {
  GTMemberSecurityDBRecord,
  GTMemberType,
  GTModulePermissionsDisplay,
  GTPersonalDetailsDisplay,
} from '../member/member';
import { GTInvitationDetailsDBRecord } from './invitation';

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
