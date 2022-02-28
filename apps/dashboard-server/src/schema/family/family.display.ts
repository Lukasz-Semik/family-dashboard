import { Field, ID, ObjectType } from '@nestjs/graphql';

import {
  CTFamilyAllMembersResponse,
  CTFamilyBaseData,
  GTFamilyDetailsDBRecord,
  GTFamilyDisplay,
  GTInvitationDisplay,
  GTMemberDisplay,
} from '@family-dashboard/global/types';

import {
  DisplayInvitation,
  InvitationDto,
} from '../invitation/invitation.display';
import { DisplayMember } from '../member/member.display';
import { UserDto } from '../user/user.dto';

@ObjectType()
export class FamilyDto implements CTFamilyBaseData {
  @Field(() => ID) readonly id: string;
  @Field(() => String) readonly name: string;
}

@ObjectType()
export class FamilyAllMembersDto implements CTFamilyAllMembersResponse {
  @Field(() => [UserDto]) readonly users: CTFamilyAllMembersResponse['users'];
  @Field(() => [InvitationDto])
  readonly invitations: CTFamilyAllMembersResponse['invitations'];
}

// V2
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
