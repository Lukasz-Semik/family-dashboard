import { Field, ID, ObjectType } from '@nestjs/graphql';

import {
  CTGender,
  CTInitialAppStateResponse,
  CTLoginResponse,
  CTMemberType,
  CTUserBaseData,
  CTUserModulePermission,
} from '@family-dashboard/global/types';

import { FamilyDto } from '../family/family.display';

@ObjectType()
export class LoginDto implements CTLoginResponse {
  @Field(() => String) readonly accessToken: string;
}

@ObjectType()
export class UserDto implements CTUserBaseData {
  @Field(() => ID) readonly id: string;
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly firstName: string;
  @Field(() => String) readonly middleName?: string;
  @Field(() => String) readonly lastName: string;
  @Field(() => Date) readonly dob: Date;
  @Field(() => CTGender) readonly gender: CTGender;
  @Field(() => [CTUserModulePermission])
  readonly modulePermissions: CTUserModulePermission[];
  @Field(() => CTMemberType) readonly memberType: CTMemberType;
}

@ObjectType()
export class InitialAppStateDto implements CTInitialAppStateResponse {
  @Field(() => UserDto)
  readonly currentUser: CTInitialAppStateResponse['currentUser'];
  @Field(() => FamilyDto) readonly family: CTInitialAppStateResponse['family'];
}
