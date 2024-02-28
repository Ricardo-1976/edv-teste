import { Customer } from '@prisma/client';
import { CreateCustomerDto } from '../dtos/create-customers-dto';
import { UpdateCustomerDto } from '../dtos/update-customer-dto';
import { ReadCustomerDto } from '../dtos/read-customers-dto';

export abstract class ICustomerRepository {
  abstract create(data: CreateCustomerDto): Promise<void>;
  abstract findByEmail(email: string): Promise<Customer | null>;
  abstract findById(id: string): Promise<Customer | null>;
  abstract update(id: string, data: UpdateCustomerDto): Promise<void>;
  abstract read(): Promise<ReadCustomerDto[]>;
  abstract deleteCustomer(id: string): Promise<void>;
}
