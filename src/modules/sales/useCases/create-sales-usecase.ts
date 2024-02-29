import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ISalesRepository } from '../repositories/sales-repository';
import { ICustomerRepository } from 'src/modules/customers/repositories/customer-repository';
import { IProductRepository } from 'src/modules/products/repositories/product-repository';
import { CreateSalesDtos } from '../dtos/create-sales-dtos';

@Injectable()
export class CreateSalesUseCase {
  constructor(
    private salesRepository: ISalesRepository,
    private customerRepository: ICustomerRepository,
    private productRepository: IProductRepository,
  ) {}

  async execute(data: CreateSalesDtos) {
    const customer = await this.customerRepository.findById(data.customer_id);
    const product = await this.productRepository.findById(data.product_id);

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

    const sales = {
      customer: customer.name,
      product: product.name,
      price: product.price,
      quantities: data.quantities,
      total: Number(product.price * data.quantities),
    };
    await this.salesRepository.create({
      ...sales,
    });
  }
}
