import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CurrentUserId } from '../../decorators/currentUserId.decorator';
import { UserEntity } from '../../entities/user.entity';
import { InitialAppStateDto, LoginDto } from '../../schema';
import { serializeFamily } from '../../serializators/family.serializator';
import { serializeUser } from '../../serializators/user.serializator';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserService } from './user.service';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  @Query(() => InitialAppStateDto)
  @UseGuards(JwtAuthGuard)
  async getUserInitialAppState(@CurrentUserId() userId: string) {
    const result = await this.userService.getUserInitialAppState(userId);

    return {
      currentUser: serializeUser(result.foundUser),
      family: serializeFamily(result.foundFamily),
    };
  }

  @Mutation(() => LoginDto)
  async login(
    @Args('email') email: string,
    @Args('password') password: string
  ) {
    const accessToken = await this.authService.login(email, password);

    return accessToken;
  }
}
