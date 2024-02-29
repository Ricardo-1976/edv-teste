import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ISalesRepository } from '../repositories/sales-repository';
import { ICustomerRepository } from 'src/modules/customers/repositories/customer-repository';
import { IProductRepository } from 'src/modules/products/repositories/product-repository';
import { CreateSalesDto } from '../dtos/create-sales-dto';

@Injectable()
export class CreateSalesUseCase {
  constructor(
    private salesRepository: ISalesRepository,
    private customerRepository: ICustomerRepository,
    private productRepository: IProductRepository,
  ) {}

  async execute(data: CreateSalesDto) {
    const customer = await this.customerRepository.findById(data.customerId);
    const product = await this.productRepository.findById(data.productId);

    if (!customer) {
      throw new HttpException(
        'Customer  does not exists!',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!product) {
      throw new HttpException(
        'Product  does not exists!',
        HttpStatus.BAD_REQUEST,
      );
    }

    const total = Number(product.price * data.quantities);
    await this.salesRepository.create({
      ...data,
      total,
    });
  }
}
