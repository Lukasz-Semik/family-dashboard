import { HttpStatus } from '@nestjs/common';
import { UserSignUpPostOptions } from '@family-dashboard/app-types';
import { appErrors } from '@family-dashboard/app-errors';

import { throwError } from '@app-be/helpers/errors';
import { BodyValidatorPipe } from '@app-be/pipes/body-validator.pipe';

import { CreateUserValidator } from './create-user.validator';
import { User as UserEntity } from '@app-be/entities';
import { getRepository } from 'typeorm';

interface CreateUserErrors {
  requestBody?: string[];
  firstName?: string[];
  lastName?: string[];
  email?: string[];
  password?: string[];
}

export class CreateUserPipe extends BodyValidatorPipe<
  UserSignUpPostOptions,
  CreateUserErrors,
  typeof CreateUserValidator
> {
  private userRepo = getRepository(UserEntity);

  constructor() {
    super();
  }

  async transform(reqBody: UserSignUpPostOptions) {
    await this.validateBody(reqBody);

    await this.validateFields(reqBody, CreateUserValidator);

    await this.validateEmailTaken(reqBody.email);

    return reqBody;
  }

  private async validateEmailTaken(email?: string) {
    const existingUser = await this.userRepo.findOne({ email });

    if (existingUser) {
      throwError(HttpStatus.CONFLICT, {
        email: [appErrors.email.taken],
      });
    }
  }
}
