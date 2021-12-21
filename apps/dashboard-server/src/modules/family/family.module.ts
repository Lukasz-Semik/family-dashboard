import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FamilyEntity } from '../../entities/family.entity';
import { UserEntity } from '../../entities/user.entity';
import { AuthModule } from '../auth/auth.module';
import { FamilyResolver } from './family.resolver';
import { FamilyService } from './family.service';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([UserEntity, FamilyEntity])],
  providers: [FamilyResolver, FamilyService],
})
export class FamilyModule {}
