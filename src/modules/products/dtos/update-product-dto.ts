import { IsNotEmpty } from 'class-validator';

export class UpdateProductDto {
  id?: string;
  @IsNotEmpty()
  name: string;
  descrption?: string;
  type?: string;
  barcode?: number;
  price?: number;
  quantities?: number;
  updatedAt?: Date;
}
