import './schema/enumsRegister';

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { DatabaseOrmModule } from './database-orm.module';
import { AuthModule } from './modules/auth/auth.module';
import { InvitationModule } from './modules/invitation/invitation.module';
import { UserModule } from './modules/user/user.module';
import { EnvModule } from './modules/utils/env/env.module';
import { TokenModule } from './modules/utils/token/token.module';

@Module({
  imports: [
    DatabaseOrmModule(),
    EnvModule,
    TokenModule,
    AuthModule,
    InvitationModule,
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gpl',
      installSubscriptionHandlers: true,
      context: ({ req }) => ({ req }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
