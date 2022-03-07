import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';

import { buildHashKey } from '@family-dashboard/global/sdk';
import {
  GTCalendarEntryType,
  GTCreateReminderInput,
  GTReminderDisplay,
  GTReminderDisplayConnection,
  GTReminderNextToken,
} from '@family-dashboard/global/types';

import { throwError } from '../../helpers/throwError';
import { serializeReminder } from '../../serializators/reminder.serializator';
import { CalendarEntryDB } from './calendarEntry.db';

@Injectable()
export class CalendarEntryService {
  constructor(private readonly calendarEntryDB: CalendarEntryDB) {}

  async getReminders(
    familyId: string,
    limit?: number,
    nextToken?: GTReminderNextToken
  ): Promise<GTReminderDisplayConnection> {
    try {
      const response = await this.calendarEntryDB.getReminders(
        familyId,
        limit,
        nextToken
      );

      return {
        reminders: response.reminders.map(serializeReminder),
        nextToken: response.nextToken,
      };
    } catch (err) {
      throwError(err.message);
    }
  }

  async createReminder(
    familyId: string,
    input: GTCreateReminderInput
  ): Promise<GTReminderDisplay> {
    try {
      const date = dayjs(input.date).utc().toISOString();
      const response = await this.calendarEntryDB.createReminder({
        familyId,
        text: input.text,
        fullKey: buildHashKey(GTCalendarEntryType.Reminder, date),
      });

      return serializeReminder(response);
    } catch (err) {
      throwError(err.message);
    }
  }
}
