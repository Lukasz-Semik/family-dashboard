import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import { FamilyEntity } from '../../entities/family.entity';
import { UserEntity } from '../../entities/user.entity';
import { AuthModule } from '../auth/auth.module';
import { FamilyDB } from './family.db';
import { FamilyResolver } from './family.resolver';
import { FamilyService } from './family.service';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([UserEntity, FamilyEntity])],
  providers: [FamilyResolver, FamilyService, DocumentClient, FamilyDB],
})
export class FamilyModule {}
