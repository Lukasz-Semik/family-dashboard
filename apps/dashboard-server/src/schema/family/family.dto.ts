import { Field, ID, ObjectType } from '@nestjs/graphql';

import {
  CTFamilyAllMembersResponse,
  CTFamilyBaseData,
} from '@family-dashboard/global/types';

import { InvitationDto } from '../invitation/invitation.dto';
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
