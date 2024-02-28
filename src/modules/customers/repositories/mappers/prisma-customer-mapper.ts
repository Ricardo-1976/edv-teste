import { Customer as RawCustomer } from '@prisma/client';
import { Customer } from '../../entities/customers';

export class PrismaCustomerMapper {
  static toPrisma(customer: Customer) {
    return {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      createdAt: customer.createdAt,
      updatedAt: customer.updatedAt,
      deletedAt: customer.deletedAt,
    };
  }

  static toDomain(raw: RawCustomer): Customer {
    return new Customer(
      {
        name: raw.name,
        email: raw.email,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
        deletedAt: raw.deletedAt,
      },
      raw.id,
    );
  }
}
