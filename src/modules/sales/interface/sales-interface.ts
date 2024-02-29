export interface SalesProps {
  customer: string;
  product?: string;
  price?: number;
  quantities: number;
  total: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
