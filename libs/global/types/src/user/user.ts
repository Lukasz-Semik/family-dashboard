export enum CTGender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

export enum CTMemberType {
  AdultUser = 'AdultUser',
  ChildUser = 'ChuldUser',
}

export interface CTUserBaseData {
  id: string;
  email: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: CTGender;
  dob: Date;
  isFamilyHead: boolean;
  hasFinanceModuleAccess: boolean;
  memberType: CTMemberType;
}

export interface CTInvitationBaseData
  extends Omit<Partial<CTUserBaseData>, 'id'> {
  email: string;
  validTo: Date;
}
