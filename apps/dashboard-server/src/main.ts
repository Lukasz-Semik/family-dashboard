import { NestFactory } from '@nestjs/core';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';

import { AppModule } from './app.module';

dayjs.extend(utc);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3001;

  await app.listen(port, () => {
    console.log(`Listening at port: ${port}`);
  });
}

bootstrap();
