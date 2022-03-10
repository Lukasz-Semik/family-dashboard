export interface GTTokenDecoded {
  email: string;
  sub: string;
  familyId: string;
  iat: number;
  exp: number;
}

export enum GTFamilyItemType {
  Birthday = 'Birthday',
}
