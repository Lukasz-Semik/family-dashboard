import {
  GTFamilyDisplay,
  GTInvitationDetailsDisplay,
  GTInvitationDisplay,
  GTMemberDisplay,
  GTPersonalDetailsDisplay,
} from '@family-dashboard/global/types';

// REFACTOR
export type APIGetFamilyDisplayMember = Omit<GTMemberDisplay, 'familyId'>;
export type APIGetFamilyDisplayInvitationDetails = Pick<
  GTInvitationDetailsDisplay,
  'validTo'
>;
export type APIGetFamilyDisplayPersonalDetails = Pick<
  GTPersonalDetailsDisplay,
  'firstName'
>;

export interface APIGetFamilyDisplayInvitation
  extends Pick<GTInvitationDisplay, 'fullKey' | 'email'> {
  invitationDetails: APIGetFamilyDisplayInvitationDetails;
  personalDetails: APIGetFamilyDisplayPersonalDetails;
}

export interface APIGetFamilyDisplay
  extends Pick<GTFamilyDisplay, 'fullKey' | 'familyId' | 'familyDetails'> {
  currentUser: APIGetFamilyDisplayMember;
  members: APIGetFamilyDisplayMember[];
  invitations: APIGetFamilyDisplayInvitation[];
}

export interface APIGetFamilyDisplayResponse {
  getFamilyDisplay: APIGetFamilyDisplay;
}
