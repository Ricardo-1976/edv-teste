import { Injectable } from '@nestjs/common';
import { ICustomerRepository } from '../repositories/customer-repository';

@Injectable()
export class ReadCustomerUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute() {
    const customres = await this.customerRepository.read();
    return customres;
  }
}
