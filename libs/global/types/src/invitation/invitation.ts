import { GTMemberModulePermissions, GTMemberType, GTPersonalDetails } from '..';
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

export interface GTInvitationDetails {
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
  modulePermissions: GTMemberModulePermissions;
  invitationDetails: GTInvitationDetails;
  personalDetails: GTPersonalDetails;
  createdAt: string;
  updatedAt: string;
}

export interface GTInvitationDisplay {
  id: string;
  familyId: string;
  email: string;
  invitationDetails: Omit<GTInvitationDetails, 'code' | 'validTo'>;
  personalDetails: GTPersonalDetails;
}
