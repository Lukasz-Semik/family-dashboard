import { Injectable } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import { AttributeValue as DynamoDbData } from 'dynamodb-data-types';
import { isEmpty } from 'lodash';
import { InjectAwsService } from 'nest-aws-sdk';

import { EMAIL_GSI, FD_FAMILY } from '@family-dashboard/global/const';
import { GTMemberDisplay } from '@family-dashboard/global/types';

@Injectable()
export class InvitationDB {
  constructor(
    @InjectAwsService(DynamoDB) private readonly dynamoDb: DynamoDB
  ) {}

  async checkIsEmailFree(email: string): Promise<boolean> {
    const response = await this.dynamoDb
      .query({
        TableName: FD_FAMILY,
        IndexName: EMAIL_GSI,
        KeyConditionExpression: 'email = :email',
        ExpressionAttributeValues: {
          ':email': { S: email },
        },
      })
      .promise();

    // TODODB: USE Invitation type as well
    const userOrInvitation = DynamoDbData.unwrap<GTMemberDisplay>(
      response.Items[0]
    );

    return isEmpty(userOrInvitation);
  }
}
