import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import { FULL_DATE_TIME_FORMAT } from '@family-dashboard/global/const';
import { buildHashKey } from '@family-dashboard/global/sdk';
import {
  GTCreateReminderInput,
  GTReminder,
  GTReminderConnection,
  GTReminderNextToken,
} from '@family-dashboard/global/types';

import { ReminderDBModel } from '../../dbModels/reminder.dbModel';
import { throwError } from '../../helpers/throwError';
import { serializeReminder } from '../../serializators/reminder.serializator';
import { ReminderDB } from './reminder.db';

@Injectable()
export class ReminderService {
  constructor(private readonly reminderDB: ReminderDB) {}

  async getReminders(
    familyId: string,
    limit?: number,
    nextToken?: GTReminderNextToken
  ): Promise<GTReminderConnection> {
    try {
      const response = await this.reminderDB.getReminders(
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
  ): Promise<GTReminder> {
    try {
      const time = input.time || '23:59';

      const parsedDate = dayjs(`${input.date} ${time}`, FULL_DATE_TIME_FORMAT)
        .utc()
        .toISOString();

      const reminder: ReminderDBModel = {
        familyId,
        text: input.text,
        // TODO: handle better approach for db prefixes
        fullKey: buildHashKey('Reminder', uuidv4()),
        hasTimeSet: Boolean(input.time),
        date: parsedDate,
      };

      const response = await this.reminderDB.createReminder(reminder);

      return serializeReminder(response);
    } catch (err) {
      throwError(err.message);
    }
  }
}
