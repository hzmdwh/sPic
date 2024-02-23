import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from '@/modules/users/user.entity';
import { AuthorizedAPI } from '@/modules/authorized/authorized_api.entity';
import { Authorized } from '@/modules/authorized/authorized.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    // @see https://github.com/Tony133/nestjs-api-boilerplate-jwt/blob/main/src/app.module.ts
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mysql',
          host: config.get('MYSQL_HOST'),
          port: config.get('MYSQL_PORT'),
          username: config.get('MYSQL_USERNAME'),
          password: config.get('MYSQL_PASSWORD'),
          database: config.get('MYSQL_DATABASE'),
          entities: [User, AuthorizedAPI, Authorized],
          // synchronize: true,
          namingStrategy: new SnakeNamingStrategy(),
        };
      },
    }),
  ],
})
export class DatabaseModule {
  constructor(private connection: Connection) {
    if (this.connection.isConnected) {
      console.log('数据库连接成功');
    } else {
      console.log('数据库连接失败');
    }
  }
}
