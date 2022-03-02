import { Field, ObjectType } from '@nestjs/graphql';

import { GTLoginDisplay } from '@family-dashboard/global/types';

@ObjectType()
export class DisplayLogin implements GTLoginDisplay {
  @Field(() => String) accessToken: string;
}
