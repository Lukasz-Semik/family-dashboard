import {
  GTCreateReminderInput,
  GTOnReminderChangeData,
  GTReminder,
  GTReminderConnection,
  GTReminderNextToken,
} from '@family-dashboard/global/types';

export interface APIGetRemindersResponse {
  getReminders: GTReminderConnection;
}

export interface APIGetRemindersVariables {
  limit?: number;
  nextToken?: GTReminderNextToken | null;
}

export interface APICreateReminderResponse {
  createReminder: GTReminder;
}

export interface APICreateReminderVariables {
  input: GTCreateReminderInput;
}

export interface APIOnReminderChangeVariables {
  userFullKey: string;
}

export interface APIOnReminderChangeResponse {
  onReminderChange: GTOnReminderChangeData;
}
