import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { randomUUID } from 'crypto';
import { StoreModule } from './store/store.module';
import { MercadoLivreModule } from './mercado-livre/mercado-livre.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    StoreModule,
    PrismaModule,
    MercadoLivreModule,
    JwtModule.register({
      global: true,
      secret: randomUUID(),
      signOptions: {
        expiresIn: '2h'
      }
    })
  ],
})
export class AppModule {}
