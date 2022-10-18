import { NestFactory } from '@nestjs/core';

const port = process.env.PORT ?? 3000;
const host = process.env.HOST || '0.0.0.0';

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  // await app.listen(3000);
  // await app.listen(process.env.PORT  ||  3000);
  await app.listen(port, host);
}
bootstrap();
