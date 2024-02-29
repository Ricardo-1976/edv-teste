export class ReadSalesDto {
  id?: string;
  customer: string;
  product?: string;
  price?: number;
  quantities: number;
  total: number;
  createdAt?: Date;
  updatedAt?: Date;
}
