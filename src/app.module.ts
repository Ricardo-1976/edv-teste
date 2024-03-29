import { Module } from '@nestjs/common';
import { ZodValidationPipe } from 'nestjs-zod';
import { PrismaModule } from './infra/database/prisma.module';
import { CustomersModule } from './modules/customers/customers.module';
import { APP_PIPE } from '@nestjs/core';
import { ProductModule } from './modules/products/product.module';
import { SalesModule } from './modules/sales/sales.module';

@Module({
  imports: [PrismaModule, CustomersModule, ProductModule, SalesModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
