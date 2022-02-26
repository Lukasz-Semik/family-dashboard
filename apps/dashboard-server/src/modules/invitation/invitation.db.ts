import { Injectable } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { isEmpty } from 'lodash';

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
  constructor(private readonly dynamoDBClient: DocumentClient) {}

  async getMemberByEmail(email: string): Promise<GTMemberDBRecord | null> {
    const response = await this.dynamoDBClient
      .query({
        TableName: FD_TABLE_FAMILY,
        IndexName: GSI_EMAIL_FULL_KEY,
        KeyConditionExpression:
          'email = :email AND begins_with(fullKey, :fullKey)',
        ExpressionAttributeValues: {
          ':email': email,
          ':fullKey': FDFamilyRecordType.Member,
        },
      })
      .promise();

    const member = response.Items[0] as GTMemberDBRecord;

    if (isEmpty(member)) {
      return null;
    }

    return member;
  }

  async getInvitationByEmail(email: string): Promise<GTInvitationDBRecord> {
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

    const invitation = response.Items[0] as GTInvitationDBRecord;

    if (isEmpty(invitation)) {
      return null;
    }

    return invitation;
  }

  async createFamilyItem<
    T = GTInvitationDBRecord | GTFamilyDBRecord | GTMemberDBRecord
  >(item: T): Promise<T> {
    await this.dynamoDBClient
      .put({
        TableName: FD_TABLE_FAMILY,
        Item: item,
      })
      .promise();

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
    await this.dynamoDBClient
      .delete({
        TableName: FD_TABLE_FAMILY,
        Key: {
          familyId,
          fullKey,
        },
      })
      .promise();

    return true;
  }
}
