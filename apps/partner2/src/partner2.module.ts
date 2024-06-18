import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@app/core/prisma/prisma.module';
import { EventosModule } from './eventos/eventos.module';
import { LugaresModule } from './spots/lugares.module';
import { AuthModule } from '../../../libs/core/src/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env.partner2', isGlobal: true }),
    AuthModule,
    PrismaModule,
    EventosModule,
    LugaresModule,
  ],
})
export class Partner2Module {}
