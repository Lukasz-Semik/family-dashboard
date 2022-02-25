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

export type GTMemberDisplay = Omit<GTMemberDBRecord, 'security'>;
