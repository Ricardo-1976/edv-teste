import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateSalesUseCase } from './useCases/create-sales-usecase';
import { ReadSalesUseCase } from './useCases/read-sales-usecase';
import { DeleteSalesUseCase } from './useCases/delete-sales-usecase';
import { CreateSalesDto } from './dtos/create-sales-dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('/sales')
@ApiTags('Sales')
export class CreateSalesController {
  constructor(
    private readonly createSalesUseCase: CreateSalesUseCase,
    private readonly readSalesUseCase: ReadSalesUseCase,
    private readonly deleteSalesUseCase: DeleteSalesUseCase,
  ) {}

  @ApiBody({})
  @Post('/')
  async create(@Body() data: CreateSalesDto) {
    await this.createSalesUseCase.execute(data);
  }

  @Get('/')
  async read() {
    return await this.readSalesUseCase.execute();
  }

  @Put('/delete/:id')
  async deleteSales(@Param('id') id: string) {
    await this.deleteSalesUseCase.execute(id);
  }
}
