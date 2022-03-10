import { splitHashKey } from '@family-dashboard/global/sdk';
import {
  GTFamilyItemType,
  GTReminderDisplay,
  GTRreminderDBRecord,
} from '@family-dashboard/global/types';

export const serializeReminder = (
  reminderDBRecord: GTRreminderDBRecord
): GTReminderDisplay => {
  const familyItemKeyData = splitHashKey(reminderDBRecord.fullKey);

  return {
    familyId: reminderDBRecord.familyId,
    fullKey: reminderDBRecord.fullKey,
    familyItemId: familyItemKeyData.data,
    familyItemType: familyItemKeyData.type as GTFamilyItemType,
    text: reminderDBRecord.text,
    date: reminderDBRecord.date,
    hasTimeSet: reminderDBRecord.hasTimeSet,
  };
};
