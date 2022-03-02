import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import {
  CurrentLoggedInUser,
  CurrentLoggedInUserData,
} from '../../decorators/currentLoggedInUser.decorator';
import { InvitationEntity } from '../../entities/invitation.entity';
import {
  DisplayInvitation,
  DisplayVerifyEmailResponse,
  InputConfirmSignUpInvitation,
  InputConfirmUserInvitation,
  InputCreateSignUpInvitation,
  InputCreateUserInvitation,
  LoginDto,
} from '../../schema';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { InvitationService } from './invitation.service';
import { InvitationServiceV2 } from './invitation.servicev2';

@Resolver(() => InvitationEntity)
export class InvitationResolver {
  constructor(
    private readonly invitationService: InvitationService,
    private readonly invitationServiceV2: InvitationServiceV2,
    private readonly authService: AuthService
  ) {}

  @Query(() => DisplayVerifyEmailResponse)
  async verifySignUpEmail(@Args('email') email: string) {
    const result = await this.invitationServiceV2.verifyEmail(email);

    return result;
  }

  @Mutation(() => Boolean)
  async createSignUpInvitation(
    @Args('input') input: InputCreateSignUpInvitation
  ) {
    return this.invitationServiceV2.createSignUpInvitation(input);
  }

  @Mutation(() => LoginDto)
  async confirmSignUpInvitation(
    @Args('input') input: InputConfirmSignUpInvitation
  ) {
    const records = await this.invitationServiceV2.confirmSignUpInvitation(
      input
    );

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
    return this.invitationServiceV2.createUserInvitation(user.familyId, input);
  }

  // TODO, used on fe?
  @Mutation(() => Boolean)
  async resendInvitation(@Args('email') email: string) {
    return this.invitationService.resendInvitation(email);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async cancelInvitation(
    @Args('fullKey') fullKey: string,
    @CurrentLoggedInUser() user: CurrentLoggedInUserData
  ) {
    return this.invitationServiceV2.cancelInvitation(user.familyId, fullKey);
  }

  @Mutation(() => LoginDto)
  async confirmUserInvitation(
    @Args('token') token: string,
    @Args('input') input: InputConfirmUserInvitation
  ) {
    const member = await this.invitationServiceV2.confirmUserInvitation(
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
    return this.invitationServiceV2.getUserInvitation(token);
  }
}
