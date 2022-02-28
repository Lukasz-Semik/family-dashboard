import {
  GTMemberType,
  GTModulePermissionsDisplay,
  GTPersonalDetailsDisplay,
} from '../member/member';
import {
  CTMemberType,
  CTUserModulePermission,
  CTUserPersonalDetails,
} from '../user/user';

export interface CTInvitationBaseData extends Partial<CTUserPersonalDetails> {
  modulePermissions: CTUserModulePermission[];
  memberType: CTMemberType;
  email: string;
  validTo: Date;
  familyName: string;
  inviterName: string;
}

export type CTInvitationDisplayData = Pick<
  CTInvitationBaseData,
  'firstName' | 'email' | 'validTo'
>;

export interface CTInvitationUserPersonalDetailsData
  extends CTUserPersonalDetails {
  email: string;
  familyName: string;
  inviterName: string;
}

// V2

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
