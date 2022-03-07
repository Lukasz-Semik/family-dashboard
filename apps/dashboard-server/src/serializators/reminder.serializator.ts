import { splitHashKey } from '@family-dashboard/global/sdk';
import {
  GTCalendarEntryDBRecord,
  GTCalendarEntryType,
  GTFamilyItemType,
  GTReminderDisplay,
} from '@family-dashboard/global/types';

export const serializeReminder = (
  calendarEntryDbRecord: GTCalendarEntryDBRecord
): GTReminderDisplay => {
  const familyItemKeyData = splitHashKey(calendarEntryDbRecord.fullKey);
  const keyData = splitHashKey(calendarEntryDbRecord.fullKey);

  return {
    familyId: calendarEntryDbRecord.familyId,
    fullKey: calendarEntryDbRecord.fullKey,
    type: GTCalendarEntryType.Reminder,
    familyItemId: familyItemKeyData.data,
    familyItemType: familyItemKeyData.type as GTFamilyItemType,
    text: calendarEntryDbRecord.text,
    date: keyData.data,
  };
};
