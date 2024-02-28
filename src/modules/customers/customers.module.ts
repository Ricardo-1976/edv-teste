import { Module } from '@nestjs/common';
import { CustomerPrismaRepository } from './repositories/prisma/customer-prisma-repository';
import { ICustomerRepository } from './repositories/customer-repository';
import { CreateCustomerUseCase } from './useCases/create-customer-usecase';
import { CreateCustomerController } from './create-customer-controller';
import { PrismaService } from 'src/infra/database/prisma.service';
import { UpdateCustomerUseCase } from './useCases/update-customer-usecase';
import { ReadCustomerUseCase } from './useCases/read-customer-usecase';
import { DeleteCustomerUseCase } from './useCases/delete-customer-usecase';

@Module({
  controllers: [CreateCustomerController],
  providers: [
    PrismaService,
    CreateCustomerUseCase,
    UpdateCustomerUseCase,
    ReadCustomerUseCase,
    DeleteCustomerUseCase,
    {
      provide: ICustomerRepository,
      useClass: CustomerPrismaRepository,
    },
  ],
})
export class CustomersModule {}
