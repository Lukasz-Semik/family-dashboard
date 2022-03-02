import { registerEnumType } from '@nestjs/graphql';

import {
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
