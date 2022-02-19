import {
  GTMemberModulePermissions,
  GTMemberType,
  GTPersonalDetails,
} from '../misc/misc';

export enum CTGender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

export enum CTMemberType {
  AdultUser = 'AdultUser',
  ChildUser = 'ChildUser',
}

export enum CTUserModulePermission {
  FamilySettings = 'FamilySettings',
  Financial = 'Financial',
}

export interface CTUserPersonalDetails {
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: CTGender;
  dob: Date;
}

export interface CTUserBaseData extends CTUserPersonalDetails {
  id: string;
  email: string;
  modulePermissions: CTUserModulePermission[];
  memberType: CTMemberType;
}

// V2
export interface GTMemberDBRecord {
  memberId: string;
  familyId: string;
  type: string;
  email: string;
  password: string;
  memberType: GTMemberType;
  modulePermissions: GTMemberModulePermissions;
  personalDetails: GTPersonalDetails;
  updatedAt: Date;
  createdAt: Date;
}

export interface GTMemberDisplay
  extends Omit<GTMemberDBRecord, 'password' | 'memberId'> {
  id: string;
}
