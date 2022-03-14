import { Field, ObjectType } from '@nestjs/graphql';

import {
  GTFamilyDetails,
  GTFamilyFullData,
  GTInvitation,
  GTMember,
} from '@family-dashboard/global/types';

import { DisplayInvitation } from '../invitation/invitation.display';
import { DisplayMember } from '../member/member.display';

@ObjectType()
export class DisplayFamilyDetails implements GTFamilyDetails {
  @Field(() => String) name: string;
}

@ObjectType()
export class DisplayFamily implements GTFamilyFullData {
  @Field(() => String) fullKey: string;
  @Field(() => String) familyId: string;
  @Field(() => String) createdAt: string;
  @Field(() => String) updatedAt: string;
  @Field(() => [DisplayInvitation]) invitations: GTInvitation[];
  @Field(() => [DisplayMember]) members: GTMember[];
  @Field(() => DisplayMember) currentUser: GTMember;
  @Field(() => DisplayFamilyDetails)
  details: GTFamilyDetails;
}
