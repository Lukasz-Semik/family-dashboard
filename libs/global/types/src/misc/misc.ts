// TODODB: REMOVE IT
export interface CTTokenDecoded {
  email: string;
  sub: string;
  familyId: string;
  iat: number;
  exp: number;
}

// V2
export interface GTTokenDecoded {
  email: string;
  sub: string;
  familyId: string;
  iat: number;
  exp: number;
}

export enum GTGender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

export enum GTMemberType {
  AdultUser = 'AdultUser',
  ChildUser = 'ChildUser',
}

export interface GTMemberModulePermissions {
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
