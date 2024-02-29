export class ReadSalesDto {
  id?: string;
  customerId: string;
  productId: string;
  quantities: number;
  total: number;
  createdAt?: Date;
  updatedAt?: Date;
}
