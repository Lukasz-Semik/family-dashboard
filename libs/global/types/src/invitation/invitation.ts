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
