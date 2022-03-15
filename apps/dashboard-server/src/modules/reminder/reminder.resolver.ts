import { UseGuards } from '@nestjs/common';
import {
  Args,
  Int,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { FDFamilyRecordType } from '@family-dashboard/global/const';
import { buildHashKey } from '@family-dashboard/global/sdk';
import {
  GTOnReminderChangeData,
  GTOnReminderChangeMessage,
} from '@family-dashboard/global/types';

import {
  CurrentLoggedInUser,
  CurrentLoggedInUserData,
} from '../../decorators/currentLoggedInUser.decorator';
import {
  DisplayOnReminderChange,
  DisplayReminder,
  DisplayReminderConnection,
  InputCreateReminder,
  InputNextTokenReminder,
} from '../../schema';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ReminderService } from './reminder.service';

const pubSub = new PubSub();

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
    const newReminder = await this.reminderService.createReminder(
      currentLoggedInUser.familyId,
      input
    );

    const subscriptionData: GTOnReminderChangeData = {
      authorFullKey: buildHashKey(
        FDFamilyRecordType.Member,
        currentLoggedInUser.userId
      ),
      reminder: newReminder,
      message: GTOnReminderChangeMessage.Created,
    };

    pubSub.publish('onReminderChange', subscriptionData);

    return newReminder;
  }

  @Subscription(() => DisplayOnReminderChange, {
    nullable: true,
    filter(
      this: ReminderResolver,
      payload: GTOnReminderChangeData,
      variables: { userFullKey: string }
    ) {
      const { userFullKey } = variables;
      const { authorFullKey } = payload;

      return userFullKey !== authorFullKey;
    },
    resolve(value) {
      return value;
    },
  })
  onReminderChange(@Args('userFullKey') userFullKey: string) {
    return pubSub.asyncIterator('onReminderChange');
  }
}
