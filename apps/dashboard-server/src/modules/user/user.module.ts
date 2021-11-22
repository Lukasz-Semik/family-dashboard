import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FamilyEntity } from '../../entities/family.entity';
import { UserEntity } from '../../entities/user.entity';
import { AuthModule } from '../auth/auth.module';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([UserEntity, FamilyEntity])],
  providers: [UserResolver, UserService],
})
export class UserModule {}
