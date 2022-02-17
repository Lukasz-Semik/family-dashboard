import './schema/enumsRegister';

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { DatabaseOrmModule } from './database-orm.module';
import { AuthModule } from './modules/auth/auth.module';
import { FamilyModule } from './modules/family/family.module';
import { InvitationModule } from './modules/invitation/invitation.module';
import { UserModule } from './modules/user/user.module';
import { EnvModule } from './modules/utils/env/env.module';
import { TokenModule } from './modules/utils/token/token.module';
import { AwsSdkModule } from 'nest-aws-sdk';
import { DynamoDB } from 'aws-sdk';

@Module({
  imports: [
    DatabaseOrmModule(),
    EnvModule,
    TokenModule,
    AuthModule,
    InvitationModule,
    UserModule,
    FamilyModule,
    AwsSdkModule.forRootAsync({
      defaultServiceOptions: {
        useFactory: (configService: ConfigService) => {
          const region = configService.get<string>('AWS_REGION');

          return {
            region,
          };
        },
        inject: [ConfigService],
        imports: [ConfigModule],
      },
      services: [DynamoDB],
    }),
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
