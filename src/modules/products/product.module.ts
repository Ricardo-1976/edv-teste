import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { CreateProductUseCase } from './useCases/create-product-usecase';
import { UpdateProductUseCase } from './useCases/update-product-usecase';
import { ReadProductUseCase } from './useCases/read-product-usecase';
import { DeleteProductUseCase } from './useCases/delete-product-usecase';
import { ProductPrismaRepository } from './repositories/prisma/product-prisma-repository';
import { IProductRepository } from './repositories/product-repository';
import { CreateProductController } from './create-product-controller';

@Module({
  controllers: [CreateProductController],
  providers: [
    PrismaService,
    CreateProductUseCase,
    UpdateProductUseCase,
    ReadProductUseCase,
    DeleteProductUseCase,
    {
      provide: IProductRepository,
      useClass: ProductPrismaRepository,
    },
  ],
})
export class ProductModule {}
