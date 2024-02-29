import { IsNotEmpty } from 'class-validator';

export class CreateSalesDtos {
  customer_id: string;
  product_id: string;
  @IsNotEmpty()
  quantities: number;
}
