import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin:['http://localhost:3000'],
    methods:['GET','POST','PUT','DELETE']
  })
  app.setGlobalPrefix('/api')
  await app.listen(3001);
}
bootstrap();
