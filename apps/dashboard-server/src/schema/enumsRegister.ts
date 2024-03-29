import { registerEnumType } from '@nestjs/graphql';

import {
  GTFamilyItemType,
  GTGender,
  GTMemberType,
  GTOnReminderChangeMessage,
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

registerEnumType(GTFamilyItemType, {
  name: 'GTFamilyItemType',
  description: 'All possible family items type',
});

registerEnumType(GTOnReminderChangeMessage, {
  name: 'GTOnReminderChangeMessage',
  description: 'Message for onReminderChange subscription',
});
