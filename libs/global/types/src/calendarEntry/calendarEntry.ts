import { GTFamilyItemType } from '../misc/misc';

export enum GTCalendarEntryType {
  Reminder = 'Reminder',
  Simple = 'Simple',
}

export interface GTCalendarEntryDBRecord {
  familyId: string;
  fullKey: string;
  text: string;
  familyItemFullKey?: string;
}

export interface GTReminderDisplay extends GTCalendarEntryDBRecord {
  type: GTCalendarEntryType.Reminder;
  familyItemId?: string;
  familyItemType?: GTFamilyItemType;
  date: string;
}

export interface GTReminderNextToken {
  fullKey: string;
  familyId: string;
}

export interface GTReminderDisplayConnection {
  reminders: GTReminderDisplay[];
  nextToken?: GTReminderNextToken;
}
