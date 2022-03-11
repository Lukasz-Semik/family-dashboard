import {
  GTReminderDisplay,
  GTReminderNextToken,
} from '@family-dashboard/global/types';

export interface WSReminder extends GTReminderDisplay {
  isNew?: boolean;
}

export interface WSRmindersState {
  data: WSReminder[];
  nextToken?: GTReminderNextToken | null;
}
