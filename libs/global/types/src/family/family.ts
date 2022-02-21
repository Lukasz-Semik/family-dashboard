import { GTInvitationDisplay } from '../invitation/invitation';
import { GTMemberDisplay } from '../member/member';

export interface CTFamilyBaseData {
  name: string;
  id: string;
}

// V2

export interface GTFamilyDetails {
  name: string;
}

export interface GTFamilyDBRecord {
  familyId: string;
  fullKey: string;
  familyDetails: GTFamilyDetails;
  createdAt: string;
  updatedAt: string;
}

export interface GTFamilyDisplay extends GTFamilyDBRecord {
  invitations: GTInvitationDisplay[];
  members: GTMemberDisplay[];
  currentUser: GTMemberDisplay;
}
