import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import { FamilyEntity } from '../../entities/family.entity';
import { InvitationEntity } from '../../entities/invitation.entity';
import { UserEntity } from '../../entities/user.entity';
import { AuthModule } from '../auth/auth.module';
import { InvitationDB } from './invitation.db';
import { InvitationResolver } from './invitation.resolver';
import { InvitationService } from './invitation.service';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([UserEntity, InvitationEntity, FamilyEntity]),
  ],
  providers: [
    InvitationResolver,
    InvitationService,
    InvitationDB,
    DocumentClient,
  ],
})
export class InvitationModule {}
