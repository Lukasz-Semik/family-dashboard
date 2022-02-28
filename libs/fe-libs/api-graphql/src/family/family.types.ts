import {
  GTFamilyDisplay,
  GTInvitationDetailsDisplay,
  GTInvitationDisplay,
  GTMemberDisplay,
  GTPersonalDetailsDisplay,
} from '@family-dashboard/global/types';

export type ApiMemberDisplay = Omit<GTMemberDisplay, 'familyId'>;

export type ApiInvitationDetailsDisplay = Pick<
  GTInvitationDetailsDisplay,
  'validTo'
>;

export type ApiInvitationPersonalDetails = Pick<
  GTPersonalDetailsDisplay,
  'firstName'
>;

export interface ApiInvitationDisplay
  extends Pick<GTInvitationDisplay, 'fullKey' | 'email'> {
  invitationDetails: ApiInvitationDetailsDisplay;
  personalDetails: ApiInvitationPersonalDetails;
}

export interface ApiFamilyDisplay
  extends Pick<GTFamilyDisplay, 'fullKey' | 'familyId' | 'familyDetails'> {
  currentUser: ApiMemberDisplay;
  members: ApiMemberDisplay[];
  invitations: ApiInvitationDisplay[];
}
