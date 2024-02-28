import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ICustomerRepository } from '../repositories/customer-repository';

@Injectable()
export class DeleteCustomerUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute(id: string) {
    const customer = await this.customerRepository.findById(id);

    if (!customer) {
      throw new HttpException(
        'Customer does not exists!',
        HttpStatus.BAD_REQUEST,
      );
    }

    customer.deletedAt = new Date();

    await this.customerRepository.deleteCustomer(id);
  }
}
