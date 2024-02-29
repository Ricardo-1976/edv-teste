import { Injectable } from '@nestjs/common';
import { ISalesRepository } from '../repositories/sales-repository';

@Injectable()
export class ReadSalesUseCase {
  constructor(private salesRepository: ISalesRepository) {}

  async execute() {
    const sales = await this.salesRepository.read();
    return sales;
  }
}
