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
    origin:['http://localhost:3000', 'https://droppal.vercel.app/'],
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders: ['*'],
    exposedHeaders: ['*'],
  })
  app.setGlobalPrefix('/api');
  await app.listen(3001,'0.0.0.0');
}
bootstrap();
