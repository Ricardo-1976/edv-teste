import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IProductRepository } from '../repositories/product-repository';
import { UpdateProductDto } from '../dtos/update-product-dto';

@Injectable()
export class UpdateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: string, data: UpdateProductDto) {
    const product = await this.productRepository.findById(id);
    const productexisti = await this.productRepository.findByBarCode(
      data.barcode,
    );

    if (productexisti) {
      throw new HttpException(
        'Product already exists!',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!product) {
      throw new HttpException(
        'Product does not exists!',
        HttpStatus.BAD_REQUEST,
      );
    }

    data.updatedAt = new Date();

    await this.productRepository.update(id, data);
  }
}
