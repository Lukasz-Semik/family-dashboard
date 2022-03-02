import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

import {
  CurrentLoggedInUser,
  CurrentLoggedInUserData,
} from '../../decorators/currentLoggedInUser.decorator';
import { DisplayFamily } from '../../schema';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { FamilyService } from './family.service';

@Resolver()
export class FamilyResolver {
  constructor(private readonly familyService: FamilyService) {}

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
