import { Injectable } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { isEmpty } from 'lodash';

import {
  FD_TABLE_FAMILY,
  FDFamilyRecordType,
} from '@family-dashboard/global/const';
import { splitHashKey } from '@family-dashboard/global/sdk';
import {
  GTFamilyDetails,
  GTFamilyFullData,
  GTMember,
} from '@family-dashboard/global/types';

import { FamilyDBModel } from '../../dbModels/family.dbModel';
import { InvitationDBModel } from '../../dbModels/invitation.dbModel';
import { MemberDBModel } from '../../dbModels/member.dbModel';
import { serializeInvitation } from '../../serializators/invitation.serializator';
import { serializeMember } from '../../serializators/member.serializator';

@Injectable()
export class FamilyDB {
  constructor(private readonly dynamoDBClient: DocumentClient) {}

  async getFamilyDisplay(
    familyId: string,
    currentUserId: string
  ): Promise<GTFamilyFullData | null> {
    const familyRawData = await this.dynamoDBClient
      .query({
        TableName: FD_TABLE_FAMILY,
        KeyConditionExpression: 'familyId = :familyId',
        ExpressionAttributeValues: {
          ':familyId': familyId,
        },
      })
      .promise();

    let resultTemplate: GTFamilyFullData = {
      familyId: '',
      fullKey: '',
      createdAt: '',
      updatedAt: '',
      currentUser: {} as GTMember,
      details: {} as GTFamilyDetails,
      invitations: [],
      members: [],
    };

    const familyData = familyRawData.Items as (
      | FamilyDBModel
      | MemberDBModel
      | InvitationDBModel
    )[];

    if (isEmpty(familyData)) {
      return null;
    }

    familyData.forEach((item) => {
      if (item.fullKey.includes(FDFamilyRecordType.Family)) {
        const familyRecord = item as FamilyDBModel;

        resultTemplate = {
          ...resultTemplate,
          ...familyRecord,
        };
        return;
      }

      if (item.fullKey.includes(FDFamilyRecordType.Invitation)) {
        const invitationRecord = item as InvitationDBModel;

        resultTemplate.invitations.push(serializeInvitation(invitationRecord));
        return;
      }

      const memberRecord = item as MemberDBModel;

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
