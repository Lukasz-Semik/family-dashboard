import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { UserEntity } from '../../entities/user.entity';
import { DisplayLogin } from '../../schema';
import { AuthService } from '../auth/auth.service';
import { UserService } from './user.service';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  @Mutation(() => DisplayLogin)
  async login(
    @Args('email') email: string,
    @Args('password') password: string
  ) {
    const accessToken = await this.authService.login(email, password);

    return accessToken;
  }
}
