import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CurrentUserId } from '@dashboard-server/decorators/currentUserId.decorator';
import { UserEntity } from '@dashboard-server/entities/user.entity';
import { InitialAppStateDto, LoginDto } from '@dashboard-server/schema';

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
    const initialAppState = await this.userService.getUserInitialAppState(
      userId
    );
    return initialAppState;
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
