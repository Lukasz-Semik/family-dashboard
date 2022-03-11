import { GTFamilyItemType } from '../misc/misc';

export interface GTRreminderDBRecord {
  familyId: string;
  fullKey: string;
  text: string;
  date: string;
  hasTimeSet: boolean;
  familyItemFullKey?: string;
}

export interface GTReminderDisplay extends GTRreminderDBRecord {
  familyItemId?: string;
  familyItemType?: GTFamilyItemType;
}

export interface GTReminderNextToken {
  fullKey: string;
  familyId: string;
}

export interface GTReminderDisplayConnection {
  reminders: GTReminderDisplay[];
  nextToken?: GTReminderNextToken | null;
}
