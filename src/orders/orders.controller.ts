import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { OrderDto } from './dto/create-order-dto';
import { OrderPayDto } from './dto/order-pay-dto';
import { Public } from 'src/common/decorators/public.decorator';

@ApiTags("Orders")
@Controller('orders')
@Public()

export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: OrderDto) {

    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id/status')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Patch(':id/pay')
  update(@Param('id') id: string, @Body() orderPayDto: OrderPayDto ) {
    return this.ordersService.update(+id, orderPayDto);
  }

}
