import { NestFactory } from '@nestjs/core';
import * as dayjs from 'dayjs';
import * as CustomParseFormat from 'dayjs/plugin/customParseFormat';
import * as utc from 'dayjs/plugin/utc';

import { AppModule } from './app.module';

dayjs.extend(utc);
dayjs.extend(CustomParseFormat);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3001;
  console.log(dayjs('29-12-1988 23:12', 'DD-MM-YYYY HH:mm').format());
  await app.listen(port, () => {
    console.log(`Listening at port: ${port}`);
  });
}

bootstrap();
