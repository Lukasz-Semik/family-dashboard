import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthModule } from '../auth/auth.module';
import { EnvService } from '../utils/env/env.service';
import { UserResolver } from './user.resolver';

const envService = new EnvService();
const envConfig = envService.read();
@Module({
  imports: [
    AuthModule,
    JwtModule.register({
      secret: envConfig.APP_SECRET,
      signOptions: { expiresIn: '5000s' },
    }),
  ],
  providers: [UserResolver],
})
export class UserModule {}
