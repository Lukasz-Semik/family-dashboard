import { Module } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import { AuthModule } from '../auth/auth.module';
import { InvitationDB } from './invitation.db';
import { InvitationResolver } from './invitation.resolver';
import { InvitationService } from './invitation.service';

@Module({
  imports: [AuthModule],
  providers: [
    InvitationResolver,
    InvitationService,
    InvitationDB,
    DocumentClient,
  ],
})
export class InvitationModule {}
