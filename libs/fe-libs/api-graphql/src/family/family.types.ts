import {
  GTFamilyDisplay,
  GTInvitationDetailsDisplay,
  GTInvitationDisplay,
  GTMemberDisplay,
  GTPersonalDetails,
} from '@family-dashboard/global/types';

export type ApiWebMemberDisplay = Omit<GTMemberDisplay, 'familyId'>;

export type ApiWebInvitationDetailsDisplay = Pick<
  GTInvitationDetailsDisplay,
  'validTo'
>;

export type ApiWebInvitationPersonalDetails = Pick<
  GTPersonalDetails,
  'firstName'
>;

export interface ApiWebInvitationDisplay
  extends Pick<GTInvitationDisplay, 'fullKey' | 'email'> {
  invitationDetails: ApiWebInvitationDetailsDisplay;
  personalDetails: ApiWebInvitationPersonalDetails;
}

export interface ApiWebFamilyDisplay
  extends Pick<GTFamilyDisplay, 'fullKey' | 'familyId' | 'familyDetails'> {
  currentUser: ApiWebMemberDisplay;
  members: ApiWebMemberDisplay[];
  invitations: ApiWebInvitationDetailsDisplay[];
}
