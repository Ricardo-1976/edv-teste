import { CreateSalesDto } from '../dtos/create-sales-dto';
import { ReadSalesDto } from '../dtos/read-sales-dto';
import { Sales } from '../entities/sales';

export abstract class ISalesRepository {
  abstract create(data: CreateSalesDto): Promise<void>;
  abstract findById(id: string): Promise<Sales | null>;
  abstract read(): Promise<ReadSalesDto[]>;
  abstract deleteSales(id: string): Promise<void>;
}
