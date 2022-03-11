import {
  GTCreateReminderInput,
  GTReminderDisplay,
  GTReminderDisplayConnection,
} from '@family-dashboard/global/types';

export interface APIGetRemindersResponse {
  getReminders: GTReminderDisplayConnection;
}

export interface APIGetRemindersVariables {
  limit?: number;
  nextToken?: GTReminderDisplayConnection['nextToken'];
}

export interface APICreateReminderResponse {
  createReminder: GTReminderDisplay;
}

export interface APICreateReminderPayload {
  input: GTCreateReminderInput;
}
