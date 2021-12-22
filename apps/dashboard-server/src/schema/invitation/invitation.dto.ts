import { Field, ObjectType } from '@nestjs/graphql';

import {
  CTGender,
  CTInvitationBaseData,
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
export class InvitationDto implements CTInvitationBaseData {
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly firstName?: string;
  @Field(() => String, { nullable: true }) readonly middleName?: string;
  @Field(() => String) readonly lastName?: string;
  @Field(() => Date) readonly dob?: Date;
  @Field(() => CTGender) readonly gender?: CTGender;
  @Field(() => Date) readonly validTo: Date;
}
