import { Injectable } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { isEmpty } from 'lodash';

import {
  FD_TABLE_FAMILY,
  FDFamilyRecordType,
} from '@family-dashboard/global/const';
import { splitHashKey } from '@family-dashboard/global/sdk';
import {
  GTFamilyDBRecord,
  GTFamilyDetailsDBRecord,
  GTFamilyDisplay,
  GTInvitationDBRecord,
  GTMemberDBRecord,
  GTMemberDisplay,
} from '@family-dashboard/global/types';

import { serializeInvitation } from '../../serializators/invitation.serializator';
import { serializeMember } from '../../serializators/member.serializator';

@Injectable()
export class FamilyDB {
  constructor(private readonly dynamoDBClient: DocumentClient) {}

  async getFamilyDisplay(
    familyId: string,
    currentUserId: string
  ): Promise<GTFamilyDisplay | null> {
    const familyRawData = await this.dynamoDBClient
      .query({
        TableName: FD_TABLE_FAMILY,
        KeyConditionExpression: 'familyId = :familyId',
        ExpressionAttributeValues: {
          ':familyId': familyId,
        },
      })
      .promise();

    let resultTemplate: GTFamilyDisplay = {
      familyId: '',
      fullKey: '',
      createdAt: '',
      updatedAt: '',
      currentUser: {} as GTMemberDisplay,
      familyDetails: {} as GTFamilyDetailsDBRecord,
      invitations: [],
      members: [],
    };

    const familyData = familyRawData.Items as (
      | GTFamilyDBRecord
      | GTMemberDBRecord
      | GTInvitationDBRecord
    )[];

    if (isEmpty(familyData)) {
      return null;
    }

    familyData.forEach((item) => {
      if (item.fullKey.includes(FDFamilyRecordType.Family)) {
        const familyRecord = item as GTFamilyDBRecord;

        resultTemplate = {
          ...resultTemplate,
          ...familyRecord,
        };
        return;
      }

      if (item.fullKey.includes(FDFamilyRecordType.Invitation)) {
        const invitationRecord = item as GTInvitationDBRecord;

        resultTemplate.invitations.push(serializeInvitation(invitationRecord));
        return;
      }

      const memberRecord = item as GTMemberDBRecord;

      const isCurrentUser = splitHashKey(item.fullKey).data === currentUserId;

      if (item.fullKey.includes(FDFamilyRecordType.Member) && isCurrentUser) {
        resultTemplate.currentUser = serializeMember(memberRecord);
        return;
      }

      resultTemplate.members.push(serializeMember(memberRecord));
    });

    return resultTemplate;
  }
}
