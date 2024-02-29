import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { DeleteSalesUseCase } from './useCases/delete-sales-usecase';
import { ReadSalesUseCase } from './useCases/read-sales-usecase';
import { CreateSalesUseCase } from './useCases/create-sales-usecase';
import { SalesPrismaRepository } from './repositories/prisma/sales-prisma-repository';
import { ISalesRepository } from './repositories/sales-repository';
import { CreateSalesController } from './create-sales-controller';
import { ICustomerRepository } from '../customers/repositories/customer-repository';
import { CustomerPrismaRepository } from '../customers/repositories/prisma/customer-prisma-repository';
import { ProductPrismaRepository } from '../products/repositories/prisma/product-prisma-repository';
import { IProductRepository } from '../products/repositories/product-repository';

@Module({
  controllers: [CreateSalesController],
  providers: [
    PrismaService,
    CreateSalesUseCase,
    ReadSalesUseCase,
    DeleteSalesUseCase,
    {
      provide: ISalesRepository,
      useClass: SalesPrismaRepository,
    },
    {
      provide: ICustomerRepository,
      useClass: CustomerPrismaRepository,
    },
    {
      provide: IProductRepository,
      useClass: ProductPrismaRepository,
    },
  ],
})
export class SalesModule {}
