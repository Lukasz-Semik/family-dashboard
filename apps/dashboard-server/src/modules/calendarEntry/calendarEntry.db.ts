import { Injectable } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import { FD_TABLE_CALENDAR_ENTRY } from '@family-dashboard/global/const';
import {
  GTCalendarEntryDBRecord,
  GTCalendarEntryType,
  GTReminderDisplay,
  GTReminderDisplayConnection,
  GTReminderNextToken,
} from '@family-dashboard/global/types';

import { ReminderNextToken } from '../../schema';

@Injectable()
export class CalendarEntryDB {
  constructor(private readonly dynamoDBClient: DocumentClient) {}

  async getReminders(
    familyId: string,
    limit = 20,
    nextToken: ReminderNextToken
  ): Promise<{
    reminders: GTCalendarEntryDBRecord[];
    nextToken: GTReminderNextToken;
  }> {
    const response = await this.dynamoDBClient
      .query({
        TableName: FD_TABLE_CALENDAR_ENTRY,
        KeyConditionExpression:
          'familyId = :familyId AND begins_with(fullKey, :fullKey)',
        ExpressionAttributeValues: {
          ':familyId': familyId,
          ':fullKey': GTCalendarEntryType.Reminder,
        },
        Limit: limit,
        ExclusiveStartKey: nextToken,
      })
      .promise();

    return {
      reminders: response.Items as GTCalendarEntryDBRecord[],
      nextToken: response.LastEvaluatedKey as ReminderNextToken,
    };
  }

  async createReminder(
    item: GTCalendarEntryDBRecord
  ): Promise<GTCalendarEntryDBRecord> {
    await this.dynamoDBClient
      .put({
        TableName: FD_TABLE_CALENDAR_ENTRY,
        Item: item,
      })
      .promise();

    return item;
  }
}
