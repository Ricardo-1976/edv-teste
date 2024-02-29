import { Sales as RawSales } from '@prisma/client';
import { Sales } from '../../entities/sales';

export class PrismaSalesMapper {
  static toPrisma(sales: Sales) {
    return {
      id: sales.id,
      customerId: sales.customerId,
      productId: sales.productId,
      quantities: sales.quantities,
      total: sales.total,
      createdAt: sales.createdAt,
      updatedAt: sales.updatedAt,
      deletedAt: sales.deletedAt,
    };
  }

  static toDomain(raw: RawSales): Sales {
    return new Sales(
      {
        customerId: raw.customerId,
        productId: raw.productId,
        quantities: raw.quantities,
        total: raw.total,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
        deletedAt: raw.deletedAt,
      },
      raw.id,
    );
  }
}
