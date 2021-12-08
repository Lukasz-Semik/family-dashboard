import { registerEnumType } from '@nestjs/graphql';

import {
  CTGender,
  CTVerifyEmailResponseStatus,
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
