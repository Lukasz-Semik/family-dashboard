import { Module } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import { AuthModule } from '../auth/auth.module';
import { ReminderDB } from './reminder.db';
import { ReminderResolver } from './reminder.resolver';
import { ReminderService } from './reminder.service';

@Module({
  imports: [AuthModule],
  providers: [DocumentClient, ReminderResolver, ReminderService, ReminderDB],
})
export class ReminderModule {}
