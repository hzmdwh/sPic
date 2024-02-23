/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Module, CacheModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-yet';
import type { RedisClientOptions } from 'redis';
import { DatabaseModule } from '@/common/database';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './modules/auth/auth.module';
import { MpModule } from './modules/mp/mp.module';
import { MiniSdkModule } from './modules/mini-sdk/mini-sdk.module';
import { AuthorizedModule } from './modules/authorized/authorized.module';

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
    DatabaseModule,
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
