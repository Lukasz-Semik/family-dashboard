import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { DisplayLogin } from '../../schema';
import { AuthService } from '../auth/auth.service';

@Resolver()
export class UserResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => DisplayLogin)
  async login(
    @Args('email') email: string,
    @Args('password') password: string
  ) {
    const accessToken = await this.authService.login(email, password);

    return accessToken;
  }
}
