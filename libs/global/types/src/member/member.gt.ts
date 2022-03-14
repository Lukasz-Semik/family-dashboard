export enum GTGender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

export enum GTMemberType {
  AdultUser = 'AdultUser',
  ChildUser = 'ChildUser',
}

export interface GTModulePermissions {
  hasFamilySettings: boolean;
  hasFinanacial: boolean;
}

export interface GTPersonalDetails {
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: GTGender;
  dob: string;
}

export interface GTMember {
  familyId: string;
  fullKey: string;
  memberType: GTMemberType;
  updatedAt: string;
  modulePermissions: GTModulePermissions;
  email: string;
  createdAt: string;
  personalDetails: GTPersonalDetails;
}
