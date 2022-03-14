import { GTInvitation } from '../invitation/invitation.gt';
import { GTMember } from '../member/member.gt';

// export interface GTFamilyDBRecord {
//   familyId: string;
//   fullKey: string;
//   familyDetails: GTFamilyDetailsDBRecord;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface GTFamilyDisplay extends GTFamilyDBRecord {
//   invitations: GTInvitation[];
//   members: GTMember[];
//   currentUser: GTMember;
// }

export interface GTFamilyDetails {
  name: string;
}

export interface GTFamily {
  familyId: string;
  fullKey: string;
  details: GTFamilyDetails;
  createdAt: string;
  updatedAt: string;
}

export interface GTFamilyFullData extends GTFamily {
  invitations: GTInvitation[];
  members: GTMember[];
  currentUser: GTMember;
}
