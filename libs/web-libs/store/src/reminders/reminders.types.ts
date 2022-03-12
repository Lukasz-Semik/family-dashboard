import {
  GTReminder,
  GTReminderNextToken,
} from '@family-dashboard/global/types';

export interface WSReminder extends GTReminder {
  isNew?: boolean;
}
export interface WSRmindersState {
  data: WSReminder[];
  nextToken?: GTReminderNextToken | null;
}
