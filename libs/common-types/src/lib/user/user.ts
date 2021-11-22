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
