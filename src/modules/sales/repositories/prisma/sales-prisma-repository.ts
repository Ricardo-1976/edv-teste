import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { ISalesRepository } from '../sales-repository';
import { Sales } from '../../entities/sales';
import { PrismaSalesMapper } from '../mappers/prisma-sales-mapper';
import { ReadSalesDto } from '../../dtos/read-sales-dto';

@Injectable()
export class SalesPrismaRepository implements ISalesRepository {
  constructor(private prisma: PrismaService) {}

  async create(sales: Sales): Promise<void> {
    const raw = PrismaSalesMapper.toPrisma(sales);

    await this.prisma.sales.create({
      data: raw,
    });
  }

  async findById(id: string): Promise<Sales | null> {
    const sales = await this.prisma.sales.findUnique({
      where: { id },
    });

    if (!sales) {
      return null;
    }

    return PrismaSalesMapper.toDomain(sales);
  }

  async read(): Promise<ReadSalesDto[]> {
    return await this.prisma.sales.findMany({
      include: {
        customer: {
          select: {
            name: true,
          },
        },
        product: {
          select: {
            name: true,
            price: true,
          },
        },
      },
      where: {
        deletedAt: null,
      },
    });
  }

  async deleteSales(id: string): Promise<void> {
    await this.prisma.sales.update({
      data: {
        deletedAt: new Date(),
      },
      where: {
        id,
      },
    });
  }
}
