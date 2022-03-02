import { Module } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import { AuthModule } from '../auth/auth.module';
import { FamilyDB } from './family.db';
import { FamilyResolver } from './family.resolver';
import { FamilyService } from './family.service';

@Module({
  imports: [AuthModule],
  providers: [FamilyResolver, FamilyService, DocumentClient, FamilyDB],
})
export class FamilyModule {}
