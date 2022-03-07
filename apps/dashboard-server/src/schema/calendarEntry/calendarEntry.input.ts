import { Field, InputType } from '@nestjs/graphql';

import {
  GTCreateReminderInput,
  GTReminderNextToken,
} from '@family-dashboard/global/types';

@InputType()
export class InputReminderNextToken implements GTReminderNextToken {
  @Field(() => String) familyId: string;
  @Field(() => String) fullKey: string;
}

@InputType()
export class InputCreateReminder implements GTCreateReminderInput {
  @Field(() => String) text: string;
  @Field(() => String) date: string;
}
