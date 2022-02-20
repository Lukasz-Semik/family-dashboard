import {
  GTMemberModulePermissions,
  GTMemberType,
  GTPersonalDetails,
} from '../misc/misc';

export interface GTMemberSecurity {
  password: string;
}

export interface GTMemberDBRecord {
  familyId: string;
  fullKey: string;
  memberType: GTMemberType;
  updatedAt: string;
  modulePermissions: GTMemberModulePermissions;
  security: GTMemberSecurity;
  email: string;
  createdAt: string;
  personalDetails: GTPersonalDetails;
}

export interface GTMemberDisplay
  extends Omit<GTMemberDBRecord, 'password' | 'memberId'> {
  id: string;
}
