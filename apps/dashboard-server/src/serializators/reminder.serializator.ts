import { splitHashKey } from '@family-dashboard/global/sdk';
import { GTFamilyItemType, GTReminder } from '@family-dashboard/global/types';

import { ReminderDBModel } from '../dbModels/reminder.dbModel';

export const serializeReminder = (
  reminderDBRecord: ReminderDBModel
): GTReminder => {
  const familyItemKeyData = splitHashKey(reminderDBRecord.familyItemFullKey);

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
