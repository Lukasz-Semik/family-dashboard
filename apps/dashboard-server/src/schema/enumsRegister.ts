import { registerEnumType } from '@nestjs/graphql';

import {
  GTCalendarEntryType,
  GTFamilyItemType,
  GTGender,
  GTMemberType,
  GTVerifyEmailStatus,
} from '@family-dashboard/global/types';

registerEnumType(GTGender, {
  name: 'GTGender',
  description: "User's gender",
});

registerEnumType(GTVerifyEmailStatus, {
  name: 'GTVerifyEmailStatus',
  description:
    'Status information according to existence of invitation or user during sing up',
});

registerEnumType(GTMemberType, {
  name: 'GTMemberType',
  description: "User's and characters member type",
});

registerEnumType(GTCalendarEntryType, {
  name: 'GTCalendarEntryType',
  description:
    'Special description of canlendar entry type. Reminder: visible on calendar and reminders list. Simple: invisible on reminders list',
});

registerEnumType(GTFamilyItemType, {
  name: 'GTFamilyItemType',
  description: 'All possible family items type',
});
