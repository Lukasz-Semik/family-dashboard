import { Field, ObjectType } from '@nestjs/graphql';

import {
  CTCTVerifyEmailResponseStatus,
  CTVerifyEmailResponse,
} from '@family-dashboard/common-types';

@ObjectType()
export class VerifyEmailDto implements CTVerifyEmailResponse {
  @Field(() => CTCTVerifyEmailResponseStatus)
  readonly status: CTCTVerifyEmailResponseStatus;
  @Field(() => String, { nullable: true }) readonly inviterName?: string;
}
