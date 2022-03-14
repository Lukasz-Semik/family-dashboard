import { Injectable } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { isEmpty } from 'lodash';

import {
  FAMILY_SIGNUP_ID,
  FD_TABLE_FAMILY,
  FDFamilyRecordType,
  GSI_EMAIL_FULL_KEY,
} from '@family-dashboard/global/const';

import { FamilyDBModel } from '../../dbModels/family.dbModel';
import { InvitationDBModel } from '../../dbModels/invitation.dbModel';
import { MemberDBModel } from '../../dbModels/member.dbModel';

@Injectable()
export class InvitationDB {
  constructor(private readonly dynamoDBClient: DocumentClient) {}

  async getMemberByEmail(email: string): Promise<MemberDBModel | null> {
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

    const member = response.Items[0] as MemberDBModel;

    if (isEmpty(member)) {
      return null;
    }

    return member;
  }

  async getInvitationByEmail(email: string): Promise<InvitationDBModel> {
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

    const invitation = response.Items[0] as InvitationDBModel;

    if (isEmpty(invitation)) {
      return null;
    }

    return invitation;
  }

  async createFamilyItem<T = InvitationDBModel | FamilyDBModel | MemberDBModel>(
    item: T
  ): Promise<T> {
    await this.dynamoDBClient
      .put({
        TableName: FD_TABLE_FAMILY,
        Item: item,
      })
      .promise();

    return item;
  }

  async createInvitation(item: InvitationDBModel): Promise<InvitationDBModel> {
    return this.createFamilyItem<InvitationDBModel>(item);
  }

  async createFamily(item: FamilyDBModel): Promise<FamilyDBModel> {
    return this.createFamilyItem<FamilyDBModel>(item);
  }

  async createMember(item: MemberDBModel): Promise<MemberDBModel> {
    return this.createFamilyItem<MemberDBModel>(item);
  }

  async recreateSignUpCode(email: string, newCode: string): Promise<boolean> {
    const existingInvitation = await this.getInvitationByEmail(email);

    if (!existingInvitation) {
      return false;
    }

    await this.dynamoDBClient
      .update({
        TableName: FD_TABLE_FAMILY,
        Key: {
          familyId: FAMILY_SIGNUP_ID,
          fullKey: existingInvitation.fullKey,
        },
        UpdateExpression: 'set details = :details',
        ExpressionAttributeValues: {
          ':details': {
            ...existingInvitation.details,
            code: newCode,
          },
        },
      })
      .promise();

    return true;
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
