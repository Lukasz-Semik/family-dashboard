import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FamilyEntity } from '@dashboard-server/entities/family.entity';
import { InvitationEntity } from '@dashboard-server/entities/invitation.entity';
import { UserEntity } from '@dashboard-server/entities/user.entity';

import { InvitationResolver } from './invitation.resolver';
import { InvitationService } from './invitation.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, InvitationEntity, FamilyEntity]),
  ],
  providers: [InvitationResolver, InvitationService],
})
export class InvitationModule {}
