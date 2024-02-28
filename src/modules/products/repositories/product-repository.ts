import { CreateProductDto } from '../dtos/create-product-dto';
import { ReadProductDto } from '../dtos/read-products-dto';
import { UpdateProductDto } from '../dtos/update-product-dto';
import { Product } from '../entities/product';

export abstract class IProductRepository {
  abstract create(data: CreateProductDto): Promise<void>;
  abstract findByBarCode(barcode: number): Promise<Product | null>;
  abstract findById(id: string): Promise<Product | null>;
  abstract update(id: string, data: UpdateProductDto): Promise<void>;
  abstract read(): Promise<ReadProductDto[]>;
  abstract deleteProduct(id: string): Promise<void>;
}
