import { registerEnumType } from '@nestjs/graphql';

import {
  CTVerifyEmailResponseStatus,
  CTGender,
} from '@family-dashboard/common-types';

registerEnumType(CTVerifyEmailResponseStatus, {
  name: 'CTVerifyEmailResponseStatus',
  description:
    'Status information according to existence of invitation or user during sing up',
});

registerEnumType(CTGender, {
  name: 'CTGender',
  description: "User's gender",
});
