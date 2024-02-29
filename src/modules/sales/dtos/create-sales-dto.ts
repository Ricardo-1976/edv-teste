import { IsNotEmpty } from 'class-validator';

export class CreateSalesDto {
  customer?: string;
  product?: string;
  price?: number;
  total?: number;
  @IsNotEmpty()
  quantities: number;
}
