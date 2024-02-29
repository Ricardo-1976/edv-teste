import { Sales as RawSales } from '@prisma/client';
import { Sales } from '../../entities/sales';

export class PrismaSalesMapper {
  static toPrisma(sales: Sales) {
    return {
      id: sales.id,
      customer: sales.customer,
      product: sales.product,
      price: sales.price,
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
        customer: raw.customer,
        product: raw.product,
        price: raw.price,
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
