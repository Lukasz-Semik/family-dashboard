import {
  GTMemberType,
  GTModulePermissionsDisplay,
  GTPersonalDetailsDisplay,
} from '../member/member';

export interface GTInvitationDetailsDBRecord {
  inviterEmail: string;
  code: string | 'verified';
  inviterName: string;
  familyName: string;
  validTo: string;
}

export interface GTInvitationDBRecord {
  familyId: string;
  fullKey: string;
  email: string;
  memberType: GTMemberType;
  modulePermissions: GTModulePermissionsDisplay;
  invitationDetails: GTInvitationDetailsDBRecord;
  personalDetails: GTPersonalDetailsDisplay;
  createdAt: string;
  updatedAt: string;
}

export type GTInvitationDetailsDisplay = Omit<
  GTInvitationDetailsDBRecord,
  'code'
>;

export interface GTInvitationDisplay {
  familyId: string;
  fullKey: string;
  email: string;
  invitationDetails: GTInvitationDetailsDisplay;
  personalDetails: GTPersonalDetailsDisplay;
}
