import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CurrentUserId } from '../../decorators/currentUserId.decorator';
import { FamilyEntity } from '../../entities/family.entity';
import { FamilyAllMembersDto } from '../../schema';
import { serializeInvitation } from '../../serializators/invitation.serializator';
import { serializeUser } from '../../serializators/user.serializator';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { FamilyService } from './family.service';

@Resolver(() => FamilyEntity)
export class FamilyResolver {
  constructor(
    private readonly familyService: FamilyService,
    private readonly authService: AuthService
  ) {}

  @Query(() => FamilyAllMembersDto)
  @UseGuards(JwtAuthGuard)
  async getAllFamilyMembers(@CurrentUserId() userId: string) {
    const family = await this.familyService.getFamilyWithAllMembers(userId);

    return {
      users: family.users
        .filter((user) => user.id !== userId)
        .map(serializeUser),
      invitations: family.invitations.map(serializeInvitation),
    };
  }
}
