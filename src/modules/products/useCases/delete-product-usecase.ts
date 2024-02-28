import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IProductRepository } from '../repositories/product-repository';

@Injectable()
export class DeleteProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: string) {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new HttpException(
        'Product does not exists!',
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.productRepository.deleteProduct(id);
  }
}
