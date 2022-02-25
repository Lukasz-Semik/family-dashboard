import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

import {
  CurrentLoggedInUser,
  CurrentLoggedInUserData,
} from '../../decorators/currentLoggedInUser.decorator';
import { FamilyEntity } from '../../entities/family.entity';
import { DisplayFamily, FamilyAllMembersDto } from '../../schema';
import { serializeInvitation } from '../../serializators/invitation.serializator';
import { serializeUser } from '../../serializators/user.serializator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { FamilyService } from './family.service';

@Resolver(() => FamilyEntity)
export class FamilyResolver {
  constructor(private readonly familyService: FamilyService) {}

  @Query(() => FamilyAllMembersDto)
  @UseGuards(JwtAuthGuard)
  async getAllFamilyMembers(
    @CurrentLoggedInUser() currentLoggedInUser: CurrentLoggedInUserData
  ) {
    const family = await this.familyService.getFamilyWithAllMembers(
      currentLoggedInUser.familyId
    );

    return {
      users: family.users
        .filter((user) => user.id !== currentLoggedInUser.userId)
        .map(serializeUser),
      invitations: family.invitations.map(serializeInvitation),
    };
  }

  @Query(() => DisplayFamily)
  @UseGuards(JwtAuthGuard)
  async getFamilyDisplay(
    @CurrentLoggedInUser() currentLoggedInUser: CurrentLoggedInUserData
  ) {
    const familyDisplay = await this.familyService.getFamilyDisplay(
      currentLoggedInUser.familyId,
      currentLoggedInUser.userId
    );

    return familyDisplay;
  }
}
