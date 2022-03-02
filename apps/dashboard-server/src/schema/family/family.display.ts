import { Field, ObjectType } from '@nestjs/graphql';

import {
  GTFamilyDetailsDBRecord,
  GTFamilyDisplay,
  GTInvitationDisplay,
  GTMemberDisplay,
} from '@family-dashboard/global/types';

import { DisplayInvitation } from '../invitation/invitation.display';
import { DisplayMember } from '../member/member.display';

@ObjectType()
export class DisplayFamilyFamilyDetails implements GTFamilyDetailsDBRecord {
  @Field(() => String) name: string;
}

@ObjectType()
export class DisplayFamily implements GTFamilyDisplay {
  @Field(() => String) fullKey: string;
  @Field(() => String) familyId: string;
  @Field(() => String) createdAt: string;
  @Field(() => String) updatedAt: string;
  @Field(() => [DisplayInvitation]) invitations: GTInvitationDisplay[];
  @Field(() => [DisplayMember]) members: GTMemberDisplay[];
  @Field(() => DisplayMember) currentUser: GTMemberDisplay;
  @Field(() => DisplayFamilyFamilyDetails)
  familyDetails: GTFamilyDetailsDBRecord;
}
