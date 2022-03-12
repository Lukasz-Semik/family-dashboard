import { GTFamilyItemType } from '../misc/misc';

export interface GTReminder {
  familyId: string;
  fullKey: string;
  text: string;
  date: string;
  hasTimeSet: boolean;
  familyItemFullKey?: string;
  familyItemId?: string;
  familyItemType?: GTFamilyItemType;
}

export interface GTReminderNextToken {
  fullKey: string;
  familyId: string;
}

export interface GTReminderConnection {
  reminders: GTReminder[];
  nextToken?: GTReminderNextToken | null;
}

export interface GTCreateReminderInput {
  text: string;
  date: string;
  time?: string;
}
