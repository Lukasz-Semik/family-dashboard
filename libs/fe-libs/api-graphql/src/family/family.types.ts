import {
  GTFamily,
  GTInvitation,
  GTInvitationDetails,
  GTMember,
  GTPersonalDetails,
} from '@family-dashboard/global/types';

export type APIGetFamilyDisplayMember = Omit<GTMember, 'familyId'>;

export type APIGetFamilyDisplayPersonalDetails = Pick<
  GTPersonalDetails,
  'firstName'
>;

export interface APIGetFamilyDisplayInvitation
  extends Pick<GTInvitation, 'fullKey' | 'email'> {
  details: GTInvitationDetails;
  personalDetails: APIGetFamilyDisplayPersonalDetails;
  validTo: string;
}

export interface APIGetFamilyDisplay
  extends Pick<GTFamily, 'fullKey' | 'familyId' | 'details'> {
  currentUser: APIGetFamilyDisplayMember;
  members: APIGetFamilyDisplayMember[];
  invitations: APIGetFamilyDisplayInvitation[];
}

export interface APIGetFamilyDisplayResponse {
  getFamilyDisplay: APIGetFamilyDisplay;
}
