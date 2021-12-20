export enum CTGender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

export interface CTUserBaseData {
  id: string;
  email: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: CTGender;
  dob: Date;
}

export interface CTInvitationBaseData
  extends Omit<Partial<CTUserBaseData>, 'id'> {
  email: string;
  validTo: Date;
}
