import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ICustomerRepository } from '../repositories/customer-repository';
import { UpdateCustomerDto } from '../dtos/update-customer-dto';

@Injectable()
export class UpdateCustomerUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute(id: string, data: UpdateCustomerDto) {
    const customer = await this.customerRepository.findById(id);
    const customerexisti = await this.customerRepository.findByEmail(
      data.email,
    );

    if (customerexisti) {
      throw new HttpException(
        'Customer already exists!',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!customer) {
      throw new HttpException(
        'Customer does not exists!',
        HttpStatus.BAD_REQUEST,
      );
    }

    data.updatedAt = new Date();

    await this.customerRepository.update(id, data);
  }
}
