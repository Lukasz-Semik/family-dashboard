import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import { UserEntity } from '../../entities/user.entity';
import { EnvService } from '../utils/env/env.service';
import { AuthDB } from './auth.db';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

const envService = new EnvService();
const envConfig = envService.read();

@Module({
  imports: [
    PassportModule,
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: envConfig.APP_SECRET,
      signOptions: { expiresIn: '5000s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, DocumentClient, AuthDB],
  exports: [AuthService],
})
export class AuthModule {}
