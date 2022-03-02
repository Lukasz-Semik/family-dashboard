import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import {
  CurrentLoggedInUser,
  CurrentLoggedInUserData,
} from '../../decorators/currentLoggedInUser.decorator';
import { InvitationEntity } from '../../entities/invitation.entity';
import {
  DisplayInvitation,
  DisplayLogin,
  DisplayVerifyEmailResponse,
  InputConfirmSignUpInvitation,
  InputConfirmUserInvitation,
  InputCreateSignUpInvitation,
  InputCreateUserInvitation,
} from '../../schema';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { InvitationService } from './invitation.service';

@Resolver(() => InvitationEntity)
export class InvitationResolver {
  constructor(
    private readonly invitationService: InvitationService,
    private readonly authService: AuthService
  ) {}

  @Query(() => DisplayVerifyEmailResponse)
  async verifySignUpEmail(@Args('email') email: string) {
    const result = await this.invitationService.verifyEmail(email);

    return result;
  }

  @Mutation(() => Boolean)
  async createSignUpInvitation(
    @Args('input') input: InputCreateSignUpInvitation
  ) {
    return this.invitationService.createSignUpInvitation(input);
  }

  @Mutation(() => DisplayLogin)
  async confirmSignUpInvitation(
    @Args('input') input: InputConfirmSignUpInvitation
  ) {
    const records = await this.invitationService.confirmSignUpInvitation(input);

    return this.authService.createToken(
      records.member.email,
      records.member.fullKey,
      records.family.familyId
    );
  }

  @Mutation(() => DisplayInvitation)
  @UseGuards(JwtAuthGuard)
  async createUserInvitation(
    @Args('input') input: InputCreateUserInvitation,
    @CurrentLoggedInUser() user: CurrentLoggedInUserData
  ) {
    return this.invitationService.createUserInvitation(user.familyId, input);
  }

  // // TODO, used on fe?
  // @Mutation(() => Boolean)
  // async resendInvitation(@Args('email') email: string) {
  //   return this.invitationService.resendInvitation(email);
  // }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async cancelInvitation(
    @Args('fullKey') fullKey: string,
    @CurrentLoggedInUser() user: CurrentLoggedInUserData
  ) {
    return this.invitationService.cancelInvitation(user.familyId, fullKey);
  }

  @Mutation(() => DisplayLogin)
  async confirmUserInvitation(
    @Args('token') token: string,
    @Args('input') input: InputConfirmUserInvitation
  ) {
    const member = await this.invitationService.confirmUserInvitation(
      token,
      input
    );

    return this.authService.createToken(
      member.email,
      member.fullKey,
      member.familyId
    );
  }

  @Query(() => DisplayInvitation)
  async getUserInvitation(@Args('token') token: string) {
    return this.invitationService.getUserInvitation(token);
  }
}
