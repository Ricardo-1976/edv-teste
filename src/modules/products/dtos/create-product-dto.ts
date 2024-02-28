import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;
  descrption?: string;
  type?: string;
  barcode?: number;
  price?: number;
  quantities?: number;
}
