import { HttpException, HttpStatus } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const throwError = (statusCode: HttpStatus, errors: any) => {
  throw new HttpException(
    {
      statusCode,
      errors,
    },
    statusCode
  );
};
