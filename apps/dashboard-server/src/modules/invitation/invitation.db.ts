import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DeleteCommand,
  DynamoDBDocumentClient,
  PutCommand,
} from '@aws-sdk/lib-dynamodb';
import { Injectable } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import { AttributeValue as DynamoDbData } from 'dynamodb-data-types';
import { isEmpty } from 'lodash';
import { InjectAwsService } from 'nest-aws-sdk';

import {
  FD_TABLE_FAMILY,
  FDFamilyRecordType,
  GSI_EMAIL_FULL_KEY,
} from '@family-dashboard/global/const';
import {
  GTFamilyDBRecord,
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
        TableName: FD_TABLE_FAMILY,
        IndexName: GSI_EMAIL_FULL_KEY,
        KeyConditionExpression:
          'email = :email and begins_with(fullKey, :fullKey)',
        ExpressionAttributeValues: {
          ':email': { S: email },
          ':fullKey': { S: FDFamilyRecordType.Member },
        },
      })
      .promise();

    const member = DynamoDbData.unwrap<GTMemberDBRecord>(response.Items[0]);

    if (isEmpty(member)) {
      return null;
    }

    return member;
  }

  async getInvitationByEmail(email: string): Promise<GTInvitationDBRecord> {
    const response = await this.dynamoDb
      .query({
        TableName: FD_TABLE_FAMILY,
        IndexName: GSI_EMAIL_FULL_KEY,
        KeyConditionExpression: 'email = :email',
        ExpressionAttributeValues: {
          ':email': { S: email },
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

  async createFamilyItem<
    T = GTInvitationDBRecord | GTFamilyDBRecord | GTMemberDBRecord
  >(item: T): Promise<T> {
    const client = new DynamoDBClient({});
    const ddbDocClient = DynamoDBDocumentClient.from(client);

    await ddbDocClient.send(
      new PutCommand({
        TableName: FD_TABLE_FAMILY,
        Item: item,
      })
    );

    client.destroy();
    return item;
  }

  async createInvitation(
    item: GTInvitationDBRecord
  ): Promise<GTInvitationDBRecord> {
    return this.createFamilyItem<GTInvitationDBRecord>(item);
  }

  async createFamily(item: GTFamilyDBRecord): Promise<GTFamilyDBRecord> {
    return this.createFamilyItem<GTFamilyDBRecord>(item);
  }

  async createMember(item: GTMemberDBRecord): Promise<GTMemberDBRecord> {
    return this.createFamilyItem<GTMemberDBRecord>(item);
  }

  async deleteInvitation(familyId: string, fullKey: string): Promise<boolean> {
    const client = new DynamoDBClient({});
    const ddbDocClient = DynamoDBDocumentClient.from(client);

    await ddbDocClient.send(
      new DeleteCommand({
        TableName: FD_TABLE_FAMILY,
        Key: {
          familyId,
          fullKey,
        },
      })
    );

    client.destroy();
    return true;
  }
}
