import { Injectable } from '@nestjs/common';
import { IProductRepository } from '../repositories/product-repository';

@Injectable()
export class ReadProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute() {
    const products = await this.productRepository.read();
    return products;
  }
}
