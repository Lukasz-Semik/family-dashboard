import { Field, ObjectType } from '@nestjs/graphql';

import {
  CTGender,
  CTInvitationBaseData,
  CTInvitationDisplayData,
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
