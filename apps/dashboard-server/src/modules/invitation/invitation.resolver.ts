import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { InvitationEntity } from '../../entities/invitation.entity';
import {
  ConfirmInvitationInput,
  CreateInvitationInput,
  VerifyEmailDto,
} from '../../schema';
import { InvitationService } from './invitation.service';

@Resolver(() => InvitationEntity)
export class InvitationResolver {
  constructor(private readonly invitationService: InvitationService) {}

  @Query(() => VerifyEmailDto)
  async verifySignUpEmail(@Args('email') email: string) {
    const result = await this.invitationService.verifyEmail(email);

    return result;
  }

  @Mutation(() => Boolean)
  async createSignUpInvitation(@Args('input') input: CreateInvitationInput) {
    return this.invitationService.createSignUpInvitation(input);
  }

  @Mutation(() => Boolean)
  async confirmSignUpInvitation(@Args('input') input: ConfirmInvitationInput) {
    return this.invitationService.confirmSignUpInvitation(input);
  }
}
