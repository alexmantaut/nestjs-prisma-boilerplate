import { Module } from '@nestjs/common';
import { PrismaCrudModule } from 'nestjs-prisma-crud';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
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
