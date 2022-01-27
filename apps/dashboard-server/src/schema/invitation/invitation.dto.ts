import { Field, ObjectType } from '@nestjs/graphql';

import {
  CTGender,
  CTInvitationBaseData,
  CTInvitationDisplayData,
  CTInvitationUserPersonalDetailsData,
  CTVerifyEmailResponse,
  CTVerifyEmailResponseStatus,
} from '@family-dashboard/global/types';

@ObjectType()
export class VerifyEmailDto implements CTVerifyEmailResponse {
  @Field(() => CTVerifyEmailResponseStatus)
  readonly status: CTVerifyEmailResponseStatus;
  @Field(() => String, { nullable: true }) readonly inviterName?: string;
}

@ObjectType()
export class InvitationDto implements CTInvitationDisplayData {
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly firstName: string;
  @Field(() => Date) readonly validTo: Date;
}

@ObjectType()
export class InvitationUserPersonalDetailsDto
  implements CTInvitationUserPersonalDetailsData
{
  @Field(() => String) readonly inviterName: string;
  @Field(() => String) readonly familyName: string;
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly firstName: string;
  @Field(() => String) readonly middleName?: string;
  @Field(() => String) readonly lastName: string;
  @Field(() => Date) readonly dob: Date;
  @Field(() => CTGender) readonly gender: CTGender;
}
