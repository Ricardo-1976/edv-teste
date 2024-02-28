import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ICustomerRepository } from '../repositories/customer-repository';
import { CreateCustomerDto } from '../dtos/create-customers-dto';

@Injectable()
export class CreateCustomerUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute(data: CreateCustomerDto) {
    const customer = await this.customerRepository.findByEmail(data.email);

    if (customer) {
      throw new HttpException(
        'Customer already exists!',
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.customerRepository.create({
      ...data,
    });
  }
}
