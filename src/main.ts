import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

import { AppModule } from './app.module';
import { generateDocument } from './doc/index';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // views
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.useStaticAssets(join(__dirname, '..', 'views'), { prefix: '/views' });
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  // 设置全局路由前缀
  // app.setGlobalPrefix('api/v1');

  // 接口版本管理
  // app.enableVersioning({
  //   defaultVersion: '1',
  //   type: VersioningType.URI,
  // });

  // 全局字段校验，保证请求接口字段校验正确
  app.useGlobalPipes(new ValidationPipe());

  generateDocument(app);

  const appConfig =
    app.get<ConfigService>(ConfigService)['internalConfig']['config'];
  const { server } = appConfig;
  const port = parseInt(server.port || 8080, 10);
  await app.listen(port);
}
bootstrap();

process.on('unhandledRejection', (reason, p) => {
  console.log('Promise: ', p, 'Reason: ', reason);
});
