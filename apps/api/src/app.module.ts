import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { randomUUID } from 'crypto';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: randomUUID(),
      signOptions: {
        expiresIn: '2h'
      }
    })
  ],
})
export class AppModule { }
