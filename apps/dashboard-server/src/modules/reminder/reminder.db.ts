import { Injectable } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import {
  FD_TABLE_REMINDERS,
  GSI_FAMILY_ID_DATE,
} from '@family-dashboard/global/const';
import {
  GTReminderNextToken,
  GTRreminderDBRecord,
} from '@family-dashboard/global/types';

import { NextTokenReminder } from '../../schema';

@Injectable()
export class ReminderDB {
  constructor(private readonly dynamoDBClient: DocumentClient) {}

  async getReminders(
    familyId: string,
    limit = 20,
    nextToken: NextTokenReminder
  ): Promise<{
    reminders: GTRreminderDBRecord[];
    nextToken: GTReminderNextToken;
  }> {
    const response = await this.dynamoDBClient
      .query({
        TableName: FD_TABLE_REMINDERS,
        IndexName: GSI_FAMILY_ID_DATE,
        KeyConditionExpression: 'familyId = :familyId',
        ExpressionAttributeValues: {
          ':familyId': familyId,
        },
        Limit: limit,
        ExclusiveStartKey: nextToken,
      })
      .promise();

    return {
      reminders: response.Items as GTRreminderDBRecord[],
      nextToken: response.LastEvaluatedKey as NextTokenReminder,
    };
  }

  async createReminder(
    item: GTRreminderDBRecord
  ): Promise<GTRreminderDBRecord> {
    await this.dynamoDBClient
      .put({
        TableName: FD_TABLE_REMINDERS,
        Item: item,
      })
      .promise();

    return item;
  }
}
