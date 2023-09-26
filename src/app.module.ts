import { Module } from '@nestjs/common';
import { PrismaCrudModule } from 'nestjs-prisma-crud';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { AuthzModule } from './authz/authz.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    ConfigModule.forRoot({}),
    /**
     *  PrismaCrudModule registers the PrismaService provider globally.
     *  No need to provide it anywhere else!
     */
    PrismaCrudModule.register({
      prismaService: PrismaService,
    }),
    AuthzModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
