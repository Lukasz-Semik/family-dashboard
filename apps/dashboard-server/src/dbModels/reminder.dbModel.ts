import { GTReminder } from '@family-dashboard/global/types';

export type ReminderDBModel = Omit<
  GTReminder,
  'familyItemId' | 'familyItemType'
>;
