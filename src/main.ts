import { NestFactory } from '@nestjs/core';
import k2e = require('koa-to-express');
import { AppModule } from './app.module';
import chumi from 'chumi';
import { AppController } from './app.controller';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(k2e(chumi([AppController])));

  await app.listen(3000);
}
bootstrap();
