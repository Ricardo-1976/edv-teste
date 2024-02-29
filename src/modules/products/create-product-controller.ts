import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductUseCase } from './useCases/create-product-usecase';
import { UpdateProductUseCase } from './useCases/update-product-usecase';
import { ReadProductUseCase } from './useCases/read-product-usecase';
import { DeleteProductUseCase } from './useCases/delete-product-usecase';
import { CreateProductDto } from './dtos/create-product-dto';
import { UpdateProductDto } from './dtos/update-product-dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('/product')
@ApiTags('product')
export class CreateProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly updateProductUseCase: UpdateProductUseCase,
    private readonly readProductUseCase: ReadProductUseCase,
    private readonly deleteProductUseCase: DeleteProductUseCase,
  ) {}

  @Post('/')
  async create(@Body() data: CreateProductDto) {
    await this.createProductUseCase.execute(data);
  }

  @Put('/update/:id')
  async update(@Param('id') id: string, @Body() data: UpdateProductDto) {
    await this.updateProductUseCase.execute(id, data);
  }

  @Get('/')
  async read() {
    return await this.readProductUseCase.execute();
  }

  @Put('/delete/:id')
  async deleteProduct(@Param('id') id: string) {
    await this.deleteProductUseCase.execute(id);
  }
}
