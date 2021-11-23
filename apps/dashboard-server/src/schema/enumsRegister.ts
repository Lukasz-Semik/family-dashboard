import {
  CTCTVerifyEmailResponseStatus,
  CTGender,
} from '@family-dashboard/common-types';
import { registerEnumType } from '@nestjs/graphql';

registerEnumType(CTCTVerifyEmailResponseStatus, {
  name: 'CTCTVerifyEmailResponseStatus',
  description:
    'Status information according to existence of invitation or user during sing up',
});

registerEnumType(CTGender, {
  name: 'CTGender',
  description: "User's gender",
});
