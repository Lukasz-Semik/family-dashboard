import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import {
  CurrentLoggedInUser,
  CurrentLoggedInUserData,
} from '../../decorators/currentLoggedInUser.decorator';
import {
  DisplayReminder,
  DisplayReminderConnection,
  InputCreateReminder,
  InputNextTokenReminder,
} from '../../schema';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ReminderService } from './reminder.service';

@Resolver()
export class ReminderResolver {
  constructor(private readonly reminderService: ReminderService) {}

  @Query(() => DisplayReminderConnection)
  @UseGuards(JwtAuthGuard)
  async getReminders(
    @CurrentLoggedInUser() currentLoggedInUser: CurrentLoggedInUserData,
    @Args({ name: 'limit', type: () => Int, nullable: true }) limit?: number,
    @Args('nextToken', { nullable: true }) nextToken?: InputNextTokenReminder
  ) {
    return this.reminderService.getReminders(
      currentLoggedInUser.familyId,
      limit,
      nextToken
    );
  }

  @Mutation(() => DisplayReminder)
  @UseGuards(JwtAuthGuard)
  async createReminder(
    @CurrentLoggedInUser() currentLoggedInUser: CurrentLoggedInUserData,
    @Args('input') input: InputCreateReminder
  ) {
    return this.reminderService.createReminder(
      currentLoggedInUser.familyId,
      input
    );
  }
}
