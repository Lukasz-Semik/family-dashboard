import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import {
  CurrentLoggedInUser,
  CurrentLoggedInUserData,
} from '../../decorators/currentLoggedInUser.decorator';
import { InvitationEntity } from '../../entities/invitation.entity';
import {
  InputConfirmSignUpInvitation,
  InputCreateSignUpInvitation,
  InvitationCreateInput,
  InvitationDto,
  InvitationUserConfirmInput,
  InvitationUserPersonalDetailsDto,
  LoginDto,
  VerifyEmailDto,
} from '../../schema';
import { serilizeUserInvitation } from '../../serializators/invitation.serializator';
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

  @Query(() => VerifyEmailDto)
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

  @Mutation(() => InvitationDto)
  @UseGuards(JwtAuthGuard)
  async createUserInvitation(
    @Args('input') input: InvitationCreateInput,
    @CurrentLoggedInUser() user: CurrentLoggedInUserData
  ) {
    return this.invitationService.createUserInvitation(input, user.familyId);
  }

  @Mutation(() => Boolean)
  async resendInvitation(@Args('email') email: string) {
    return this.invitationService.resendInvitation(email);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async cancelInvitation(
    @Args('email') email: string,
    @CurrentLoggedInUser() user: CurrentLoggedInUserData
  ) {
    return this.invitationService.cancelUserInvitation(email, user.familyId);
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

  @Mutation(() => LoginDto)
  async confirmUserInvitation(
    @Args('token') token: string,
    @Args('input') input: InvitationUserConfirmInput
  ) {
    const user = await this.invitationService.confirmUserInvitation(
      input,
      token
    );

    return this.authService.createToken(user.email, user.id, user.family.id);
  }

  @Query(() => InvitationUserPersonalDetailsDto)
  async getUserInvitation(@Args('token') token: string) {
    const invitation = await this.invitationService.getUserInvitation(token);

    return serilizeUserInvitation(invitation);
  }
}
