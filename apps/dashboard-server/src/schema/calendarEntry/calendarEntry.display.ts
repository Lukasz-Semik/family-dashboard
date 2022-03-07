import { Field, ObjectType } from '@nestjs/graphql';

import {
  GTCalendarEntryType,
  GTFamilyItemType,
  GTReminderDisplay,
  GTReminderDisplayConnection,
  GTReminderNextToken,
} from '@family-dashboard/global/types';

@ObjectType()
export class DisplayReminder implements GTReminderDisplay {
  @Field(() => String) familyId: string;
  @Field(() => String) fullKey: string;
  @Field(() => String) text: string;
  @Field(() => String) type: GTCalendarEntryType.Reminder;
  @Field(() => String) date: string;
  @Field(() => String, { nullable: true }) familyItemFullKey?: string;
  @Field(() => String, { nullable: true }) familyItemType?: GTFamilyItemType;
  @Field(() => String, { nullable: true }) familyItemId: string;
}

@ObjectType()
export class ReminderNextToken implements GTReminderNextToken {
  @Field(() => String) familyId: string;
  @Field(() => String) fullKey: string;
}

@ObjectType()
export class DisplayReminderConnection implements GTReminderDisplayConnection {
  @Field(() => [DisplayReminder]) reminders: GTReminderDisplay[];
  @Field(() => ReminderNextToken, { nullable: true })
  nextToken?: GTReminderNextToken;
}
