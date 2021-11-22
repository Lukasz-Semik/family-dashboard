import {
  CTVerifyEmailResponse,
  CTCTVerifyEmailResponseStatus,
} from '@family-dashboard/common-types';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class VerifyEmailDto implements CTVerifyEmailResponse {
  @Field(() => CTCTVerifyEmailResponseStatus)
  readonly status: CTCTVerifyEmailResponseStatus;
  @Field(() => String, { nullable: true }) readonly inviterName?: string;
}
