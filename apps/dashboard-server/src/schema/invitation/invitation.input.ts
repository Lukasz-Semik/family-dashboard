import { Field, InputType } from '@nestjs/graphql';

import {
  CTGender,
  CTInvitationConfirmInput,
  CTInvitationCreateInput,
  CTInvitationSignUpCreateInput,
  CTMemberType,
  CTUserModulePermission,
} from '@family-dashboard/global/types';

@InputType()
export class InvitationCreateInput implements CTInvitationCreateInput {
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly inviterName: string;
  @Field(() => CTMemberType)
  readonly memberType: CTMemberType;
  @Field(() => [CTUserModulePermission])
  readonly modulePermissions: CTUserModulePermission[];
  @Field(() => String, { nullable: true }) readonly firstName?: string;
  @Field(() => String, { nullable: true }) readonly middleName?: string;
  @Field(() => String, { nullable: true }) readonly lastName?: string;
  @Field(() => Date, { nullable: true }) readonly dob?: Date;
  @Field(() => CTGender, { nullable: true }) readonly gender?: CTGender;
}

@InputType()
export class InvitationSignUpCreateInput
  implements CTInvitationSignUpCreateInput
{
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly inviterName: string;
  @Field(() => String) readonly familyName: string;
  @Field(() => String, { nullable: true }) readonly firstName?: string;
  @Field(() => String, { nullable: true }) readonly middleName?: string;
  @Field(() => String, { nullable: true }) readonly lastName?: string;
  @Field(() => Date, { nullable: true }) readonly dob?: Date;
  @Field(() => CTGender, { nullable: true }) readonly gender?: CTGender;
}

@InputType()
export class InvitationConfirmInput implements CTInvitationConfirmInput {
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly password: string;
  @Field(() => String) readonly firstName: string;
  @Field(() => String, { nullable: true }) readonly middleName?: string;
  @Field(() => String) readonly lastName: string;
  @Field(() => Date) readonly dob: Date;
  @Field(() => CTGender) readonly gender: CTGender;
  @Field(() => String) readonly code: string;
}
