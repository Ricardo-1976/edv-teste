import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { IProductRepository } from '../product-repository';
import { Product } from '../../entities/product';
import { PrismaProductMapper } from '../mappers/prisma-product-mapper';
import { ReadProductDto } from '../../dtos/read-products-dto';

@Injectable()
export class ProductPrismaRepository implements IProductRepository {
  constructor(private prisma: PrismaService) {}

  async create(product: Product): Promise<void> {
    const raw = PrismaProductMapper.toPrisma(product);

    await this.prisma.product.create({
      data: raw,
    });
  }

  async findByBarCode(barcode: number): Promise<Product> {
    const product = await this.prisma.Product.findUnique({
      where: { barcode, deletedAt: null },
    });

    if (!product) {
      return null;
    }

    return PrismaProductMapper.toDomain(product);
  }

  async findById(id: string): Promise<Product | null> {
    const product = await this.prisma.Product.findUnique({
      where: { id },
    });

    if (!product) {
      return null;
    }

    return PrismaProductMapper.toDomain(product);
  }

  async update(id: string, product: Product): Promise<void> {
    const raw = PrismaProductMapper.toPrisma(product);

    await this.prisma.Product.update({
      data: raw,
      where: {
        id,
      },
    });
  }

  async read(): Promise<ReadProductDto[]> {
    return await this.prisma.Product.findMany({
      where: {
        deletedAt: null,
      },
    });
  }

  async deleteProduct(id: string): Promise<void> {
    await this.prisma.Product.update({
      data: {
        deletedAt: new Date(),
        barcode: null,
      },
      where: {
        id,
      },
    });
  }
}
