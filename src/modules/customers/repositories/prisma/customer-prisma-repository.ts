import { Injectable } from '@nestjs/common';
import { ICustomerRepository } from '../customer-repository';
import { PrismaCustomerMapper } from '../mappers/prisma-customer-mapper';
import { Customer } from '../../entities/customers';
import { PrismaService } from 'src/infra/database/prisma.service';
import { ReadCustomerDto } from '../../dtos/read-customers-dto';

@Injectable()
export class CustomerPrismaRepository implements ICustomerRepository {
  constructor(private prisma: PrismaService) {}

  async create(customer: Customer): Promise<void> {
    const raw = PrismaCustomerMapper.toPrisma(customer);

    await this.prisma.customer.create({
      data: raw,
    });
  }

  async findByEmail(email: string): Promise<Customer | null> {
    const customer = await this.prisma.customer.findUnique({
      where: {
        email,
      },
    });

    if (!customer) {
      return null;
    }

    return PrismaCustomerMapper.toDomain(customer);
  }

  async findById(id: string): Promise<Customer | null> {
    const customer = await this.prisma.customer.findUnique({
      where: { id },
    });

    if (!customer) {
      return null;
    }

    return PrismaCustomerMapper.toDomain(customer);
  }

  async update(id: string, customer: Customer): Promise<void> {
    const raw = PrismaCustomerMapper.toPrisma(customer);

    await this.prisma.customer.update({
      data: raw,
      where: {
        id,
      },
    });
  }

  async read(): Promise<ReadCustomerDto[]> {
    return await this.prisma.customer.findMany({
      where: {
        deletedAt: null,
      },
    });
  }

  async deleteCustomer(id: string): Promise<void> {
    await this.prisma.customer.update({
      data: {
        deletedAt: new Date(),
        email: null,
      },
      where: {
        id,
      },
    });
  }
}
