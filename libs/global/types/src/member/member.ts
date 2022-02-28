export enum GTGender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

export enum GTMemberType {
  AdultUser = 'AdultUser',
  ChildUser = 'ChildUser',
}

export interface GTModulePermissionsDisplay {
  hasFamilySettings: boolean;
  hasFinanacial: boolean;
}

export interface GTPersonalDetailsDisplay {
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: GTGender;
  dob: string;
}

export interface GTMemberSecurityDBRecord {
  password: string;
}

export interface GTMemberDBRecord {
  familyId: string;
  fullKey: string;
  memberType: GTMemberType;
  updatedAt: string;
  modulePermissions: GTModulePermissionsDisplay;
  security: GTMemberSecurityDBRecord;
  email: string;
  createdAt: string;
  personalDetails: GTPersonalDetailsDisplay;
}

export type GTMemberDisplay = Omit<GTMemberDBRecord, 'security'>;
