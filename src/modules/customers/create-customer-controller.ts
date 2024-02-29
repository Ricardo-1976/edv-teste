import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCustomerUseCase } from './useCases/create-customer-usecase';
import { CreateCustomerDto } from './dtos/create-customers-dto';
import { UpdateCustomerDto } from './dtos/update-customer-dto';
import { UpdateCustomerUseCase } from './useCases/update-customer-usecase';
import { ReadCustomerUseCase } from './useCases/read-customer-usecase';
import { DeleteCustomerUseCase } from './useCases/delete-customer-usecase';
import { ApiTags } from '@nestjs/swagger';

@Controller('/customer')
@ApiTags('customer')
export class CreateCustomerController {
  constructor(
    private readonly createCustomerUseCase: CreateCustomerUseCase,
    private readonly updateCustomerUseCase: UpdateCustomerUseCase,
    private readonly readCustomerUseCase: ReadCustomerUseCase,
    private readonly deleteCustomerUseCase: DeleteCustomerUseCase,
  ) {}

  @Post('/')
  async create(@Body() data: CreateCustomerDto) {
    await this.createCustomerUseCase.execute(data);
  }

  @Put('/update/:id')
  async update(@Param('id') id: string, @Body() data: UpdateCustomerDto) {
    await this.updateCustomerUseCase.execute(id, data);
  }

  @Get('/')
  async read() {
    return await this.readCustomerUseCase.execute();
  }

  @Put('/delete/:id')
  async deleteCustomer(@Param('id') id: string) {
    await this.deleteCustomerUseCase.execute(id);
  }
}
