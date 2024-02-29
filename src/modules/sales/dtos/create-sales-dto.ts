import { IsNotEmpty } from 'class-validator';

export class CreateSalesDto {
  customerId: string;
  productId: string;
  total?: number;
  @IsNotEmpty()
  quantities: number;
}
