import { Field, ObjectType } from '@nestjs/graphql';

import {
  CTVerifyEmailResponseStatus,
  CTVerifyEmailResponse,
} from '@family-dashboard/common-types';

@ObjectType()
export class VerifyEmailDto implements CTVerifyEmailResponse {
  @Field(() => CTVerifyEmailResponseStatus)
  readonly status: CTVerifyEmailResponseStatus;
  @Field(() => String, { nullable: true }) readonly inviterName?: string;
}
