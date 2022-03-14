import { splitHashKey } from '@family-dashboard/global/sdk';
import { GTFamilyItemType, GTReminder } from '@family-dashboard/global/types';

import { ReminderDBModel } from '../dbModels/reminder.dbModel';

export const serializeReminder = (
  reminderDBModel: ReminderDBModel
): GTReminder => {
  const familyItemKeyData = splitHashKey(reminderDBModel.familyItemFullKey);

  return {
    familyId: reminderDBModel.familyId,
    fullKey: reminderDBModel.fullKey,
    familyItemId: familyItemKeyData.data,
    familyItemType: familyItemKeyData.type as GTFamilyItemType,
    text: reminderDBModel.text,
    date: reminderDBModel.date,
    hasTimeSet: reminderDBModel.hasTimeSet,
  };
};
