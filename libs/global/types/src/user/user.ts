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
