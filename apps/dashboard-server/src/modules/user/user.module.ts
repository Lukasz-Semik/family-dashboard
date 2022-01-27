import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FamilyEntity } from '../../entities/family.entity';
import { UserEntity } from '../../entities/user.entity';
import { AuthModule } from '../auth/auth.module';
import { EnvService } from '../utils/env/env.service';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

const envService = new EnvService();
const envConfig = envService.read();
@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([UserEntity, FamilyEntity]),
    JwtModule.register({
      secret: envConfig.APP_SECRET,
      signOptions: { expiresIn: '5000s' },
    }),
  ],
  providers: [UserResolver, UserService],
})
export class UserModule {}
