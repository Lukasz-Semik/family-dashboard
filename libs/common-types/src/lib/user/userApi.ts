import {
  CTFamilyBaseData,
  CTUserBaseData,
} from '@family-dashboard/common-types';

export enum CTVerifyEmailResponseStatus {
  Success = 'Success',
  Invited = 'Invited',
  Deprecated = 'Deprecated',
  SignUpNotFinished = 'SignUpNotFinished',
  AlreadyCreated = 'AlreadyCreated',
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

export interface CreateInvitationInput
  extends Partial<Omit<CTConfirmInvitationInput, 'password'>> {
  inviterName: string;
}

export interface CTLoginResponse {
  accessToken: string;
}

export interface CTInitialAppStateResponse {
  currentUser: CTUserBaseData;
  family: CTFamilyBaseData;
}
