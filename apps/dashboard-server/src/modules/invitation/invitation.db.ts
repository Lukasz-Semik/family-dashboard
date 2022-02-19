import { Injectable } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import { AttributeValue as DynamoDbData } from 'dynamodb-data-types';
import { isEmpty } from 'lodash';
import { InjectAwsService } from 'nest-aws-sdk';
import { v4 as uuidv4 } from 'uuid';

import {
  EMAIL_GSI,
  FDFamilyRecordType,
  FD_FAMILY,
} from '@family-dashboard/global/const';
import {
  GTInputCreateSignUpInvitation,
  GTInvitationDBRecord,
  GTMemberDBRecord,
  GTMemberDisplay,
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

  async createInvitation(input: GTInputCreateSignUpInvitation): Promise<any> {
    const response = await this.dynamoDb
      .putItem({
        TableName: FD_FAMILY,
        Item: {
          familyId: {
            S: `temporary-${uuidv4()}`,
          },
        },
      })
      .promise();
  }
}
