import { Injectable } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { isEmpty } from 'lodash';

import {
  FD_TABLE_FAMILY,
  GSI_EMAIL_FULL_KEY,
} from '@family-dashboard/global/const';
import { GTMemberDBRecord } from '@family-dashboard/global/types';

@Injectable()
export class AuthDB {
  constructor(private readonly dynamoDBClient: DocumentClient) {}

  async getMemberByEmail(email: string): Promise<GTMemberDBRecord | null> {
    const response = await this.dynamoDBClient
      .query({
        TableName: FD_TABLE_FAMILY,
        IndexName: GSI_EMAIL_FULL_KEY,
        KeyConditionExpression: 'email = :email',
        ExpressionAttributeValues: {
          ':email': email,
        },
      })
      .promise();

    const member = response.Items[0] as GTMemberDBRecord;

    if (isEmpty(member)) {
      return null;
    }

    return member;
  }
}
