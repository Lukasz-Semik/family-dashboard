import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CurrentUserId } from '../../decorators/currentUserId.decorator';
import { InvitationEntity } from '../../entities/invitation.entity';
import {
  ConfirmInvitationInput,
  CreateInvitationInput,
  InvitationDto,
  LoginDto,
  VerifyEmailDto,
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

  @Query(() => VerifyEmailDto)
  async verifySignUpEmail(@Args('email') email: string) {
    const result = await this.invitationService.verifyEmail(email);

    return result;
  }

  @Mutation(() => Boolean)
  async createSignUpInvitation(@Args('input') input: CreateInvitationInput) {
    return this.invitationService.createSignUpInvitation(input);
  }

  @Mutation(() => [InvitationDto])
  @UseGuards(JwtAuthGuard)
  async createUserInvitation(
    @Args('input') input: CreateInvitationInput,
    @CurrentUserId() userId: string
  ) {
    return this.invitationService.createUserInvitation(input, userId);
  }

  @Mutation(() => Boolean)
  async resendInvitation(@Args('email') email: string) {
    return this.invitationService.resendInvitation(email);
  }

  @Mutation(() => LoginDto)
  async confirmSignUpInvitation(@Args('input') input: ConfirmInvitationInput) {
    const user = await this.invitationService.confirmSignUpInvitation(input);

    return this.authService.createToken(user.email, user.id);
  }
}
