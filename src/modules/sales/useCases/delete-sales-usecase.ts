import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ISalesRepository } from '../repositories/sales-repository';

@Injectable()
export class DeleteSalesUseCase {
  constructor(private salesRepository: ISalesRepository) {}

  async execute(id: string) {
    const product = await this.salesRepository.findById(id);

    if (!product) {
      throw new HttpException(
        'Product does not exists!',
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.salesRepository.deleteSales(id);
  }
}
