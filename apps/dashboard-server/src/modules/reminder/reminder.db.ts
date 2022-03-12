import { Injectable } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import {
  FD_TABLE_REMINDERS,
  GSI_FAMILY_ID_DATE,
} from '@family-dashboard/global/const';
import { GTReminderNextToken } from '@family-dashboard/global/types';

import { ReminderDBModel } from '../../dbModels/reminder.dbModel';

@Injectable()
export class ReminderDB {
  constructor(private readonly dynamoDBClient: DocumentClient) {}

  async getReminders(
    familyId: string,
    limit = 20,
    nextToken: GTReminderNextToken
  ): Promise<{
    reminders: ReminderDBModel[];
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
      reminders: response.Items as ReminderDBModel[],
      nextToken: response.LastEvaluatedKey as GTReminderNextToken,
    };
  }

  async createReminder(item: ReminderDBModel): Promise<ReminderDBModel> {
    await this.dynamoDBClient
      .put({
        TableName: FD_TABLE_REMINDERS,
        Item: item,
      })
      .promise();

    return item;
  }
}
