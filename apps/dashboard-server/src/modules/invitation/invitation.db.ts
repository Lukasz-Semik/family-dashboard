import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { Injectable } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import { AttributeValue as DynamoDbData } from 'dynamodb-data-types';
import { isEmpty } from 'lodash';
import { InjectAwsService } from 'nest-aws-sdk';

import {
  EMAIL_GSI,
  FD_FAMILY,
  FDFamilyRecordType,
} from '@family-dashboard/global/const';
import {
  GTInvitationDBRecord,
  GTMemberDBRecord,
} from '@family-dashboard/global/types';

@Injectable()
export class InvitationDB {
  constructor(
    @InjectAwsService(DynamoDB) private readonly dynamoDb: DynamoDB
  ) {}

  async getMemberByEmail(email: string): Promise<GTMemberDBRecord | null> {
    const response = await this.dynamoDb
      .query({
        TableName: FD_FAMILY,
        IndexName: EMAIL_GSI,
        KeyConditionExpression: 'email = :email and begins_with(#type, :type)',
        ExpressionAttributeNames: {
          '#type': 'type',
        },
        ExpressionAttributeValues: {
          ':email': { S: email },
          ':type': { S: FDFamilyRecordType.Member },
        },
      })
      .promise();

    const member = DynamoDbData.unwrap<GTMemberDBRecord>(response.Items[0]);

    if (isEmpty(member)) {
      return null;
    }

    return member;
  }

  async getInvitationByEmail(
    email: string
  ): Promise<GTInvitationDBRecord | null> {
    const response = await this.dynamoDb
      .query({
        TableName: FD_FAMILY,
        IndexName: EMAIL_GSI,
        KeyConditionExpression: 'email = :email and begins_with(#type, :type)',
        ExpressionAttributeNames: {
          '#type': 'type',
        },
        ExpressionAttributeValues: {
          ':email': { S: email },
          ':type': { S: FDFamilyRecordType.Invitation },
        },
      })
      .promise();

    const invitation = DynamoDbData.unwrap<GTInvitationDBRecord>(
      response.Items[0]
    );

    if (isEmpty(invitation)) {
      return null;
    }

    return invitation;
  }

  async createInvitation(
    item: GTInvitationDBRecord
  ): Promise<GTInvitationDBRecord> {
    const client = new DynamoDBClient({});
    const ddbDocClient = DynamoDBDocumentClient.from(client);
    const response = await ddbDocClient.send(
      new PutCommand({
        TableName: FD_FAMILY,
        Item: item,
      })
    );
    console.log(response);
    return item;
  }
}
