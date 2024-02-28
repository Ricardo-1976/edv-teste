import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class UpdateCustomerDto {
  id?: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  updatedAt?: Date;
}
