import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import {
  CurrentLoggedInUser,
  CurrentLoggedInUserData,
} from '../../decorators/currentLoggedInUser.decorator';
import {
  DisplayReminder,
  DisplayReminderConnection,
  InputCreateReminder,
  InputReminderNextToken,
} from '../../schema';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CalendarEntryService } from './calendarEntry.service';

@Resolver()
export class CalendarEntryResolver {
  constructor(private readonly calendarEntryService: CalendarEntryService) {}

  @Query(() => DisplayReminderConnection)
  @UseGuards(JwtAuthGuard)
  async getReminders(
    @CurrentLoggedInUser() currentLoggedInUser: CurrentLoggedInUserData,
    @Args('limit', { nullable: true }) limit?: number,
    @Args('nextToken', { nullable: true }) nextToken?: InputReminderNextToken
  ) {
    return this.calendarEntryService.getReminders(
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
    return this.calendarEntryService.createReminder(
      currentLoggedInUser.familyId,
      input
    );
  }
}
