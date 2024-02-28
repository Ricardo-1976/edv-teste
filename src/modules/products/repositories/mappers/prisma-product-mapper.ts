import { Product as RawProduct } from '@prisma/client';
import { Product } from '../../entities/product';

export class PrismaProductMapper {
  static toPrisma(product: Product) {
    return {
      id: product.id,
      name: product.name,
      descrption: product.descrption,
      type: product.type,
      barcode: product.barcode,
      price: product.price,
      quantities: product.quantities,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      deletedAt: product.deletedAt,
    };
  }

  static toDomain(raw: RawProduct): Product {
    return new Product(
      {
        name: raw.name,
        descrption: raw.descrption,
        type: raw.type,
        barcode: raw.barcode,
        price: raw.price,
        quantities: raw.quantities,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
        deletedAt: raw.deletedAt,
      },
      raw.id,
    );
  }
}
