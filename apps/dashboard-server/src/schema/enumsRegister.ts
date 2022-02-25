import { registerEnumType } from '@nestjs/graphql';

import {
  CTGender,
  CTMemberType,
  CTUserModulePermission,
  CTVerifyEmailResponseStatus,
  GTGender,
  GTMemberType,
  GTVerifyEmailStatus,
} from '@family-dashboard/global/types';

registerEnumType(CTVerifyEmailResponseStatus, {
  name: 'CTVerifyEmailResponseStatus',
  description:
    'Status information according to existence of invitation or user during sing up',
});

registerEnumType(CTGender, {
  name: 'CTGender',
  description: "User's gender",
});

registerEnumType(CTMemberType, {
  name: 'CTMemberType',
  description: "User's and characters member type",
});

registerEnumType(CTUserModulePermission, {
  name: 'CTUserModulePermission',
  description: "User's modules permissions",
});

// V2
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
