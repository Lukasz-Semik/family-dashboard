import { Module } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import { AuthModule } from '../auth/auth.module';
import { CalendarEntryDB } from './calendarEntry.db';
import { CalendarEntryResolver } from './calendarEntry.resolver';
import { CalendarEntryService } from './calendarEntry.service';

@Module({
  imports: [AuthModule],
  providers: [
    DocumentClient,
    CalendarEntryResolver,
    CalendarEntryService,
    CalendarEntryDB,
  ],
})
export class CalendarEntryModule {}
