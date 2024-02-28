import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IProductRepository } from '../repositories/product-repository';
import { CreateProductDto } from '../dtos/create-product-dto';

@Injectable()
export class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(data: CreateProductDto) {
    const product = await this.productRepository.findByBarCode(data.barcode);

    if (product) {
      throw new HttpException(
        'Product already exists!',
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.productRepository.create({
      ...data,
    });
  }
}
