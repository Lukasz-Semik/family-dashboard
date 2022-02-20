export interface CTFamilyBaseData {
  name: string;
  id: string;
}

// V2

export interface GTFamilyDetails {
  name: string;
}

export interface GTFamilyDBRecord {
  familyId: string;
  fullKey: string;
  familyDetails: GTFamilyDetails;
  createdAt: string;
  updatedAt: string;
}
