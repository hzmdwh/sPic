/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Module, CacheModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-yet';
import type { RedisClientOptions } from 'redis';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './modules/auth/auth.module';
import { MpModule } from './modules/mp/mp.module';
import { MiniSdkModule } from './modules/mini-sdk/mini-sdk.module';
import { AuthorizedModule } from './modules/authorized/authorized.module';
import { User } from './modules/users/user.entity';
import { AuthorizedAPI } from './modules/authorized/authorized_api.entity';
import { Authorized } from './modules/authorized/authorized.entity';

import {
  config,
  constants,
  environments,
  validationSchema,
} from './common/config';
import { CodeModule } from './common/code/code.module';
import { UtilsModule } from './common/utils/utils.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[`${process.env.NODE_ENV}`],
      // ignoreEnvFile: process.env.NODE_ENV === 'production' || false,
      load: [config, constants],
      isGlobal: true,
      validationSchema,
    }),
    CacheModule.registerAsync<RedisClientOptions>({
      imports: [ConfigModule],
      inject: [ConfigService],
      isGlobal: true,
      useFactory: async (config: ConfigService) => {
        const store = await redisStore({
          socket: {
            host: config.get('REDIS_HOST'),
            port: config.get('REDIS_PORT'),
          },
        });
        return { store };
      },
    }),
    // @see https://github.com/Tony133/nestjs-api-boilerplate-jwt/blob/main/src/app.module.ts
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('MYSQL_HOST'),
        port: config.get('MYSQL_PORT'),
        username: config.get('MYSQL_USERNAME'),
        password: config.get('MYSQL_PASSWORD'),
        database: config.get('MYSQL_DATABASE'),
        entities: [User, AuthorizedAPI, Authorized],
        // synchronize: true,
        namingStrategy: new SnakeNamingStrategy(),
      }),
    }),
    AuthModule,
    MpModule,
    MiniSdkModule,
    CodeModule,
    UtilsModule,
    AuthorizedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
