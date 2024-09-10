import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersOnProductsService } from './orders-on-produts.service';
import { Prisma } from '@prisma/client';

@Controller('orders-on-produts')
export class OrdersOnProdutsController {
  constructor(private readonly ordersOnProdutsService: OrdersOnProductsService) {}

  @Post()
  create(@Body() createOrdersOnProdutDto: Prisma.OrdersOnProductsCreateInput) {
    return this.ordersOnProdutsService.create(createOrdersOnProdutDto);
  }

  @Get()
  findAll() {
    return this.ordersOnProdutsService.findAll();
  }

  @Get('/products/:productId/orders/:orderId')
  findOne(@Param('productId') productId: number, @Param('orderId') orderId:number) {
    return this.ordersOnProdutsService.findOne(productId, orderId);
  }

  @Patch('/products/:productId/orders/:orderId')
  update(@Param('productId') productId: number, @Param('orderId') orderId:number, @Body() updateOrdersOnProdutDto: Prisma.OrdersOnProductsUpdateInput) {
    return this.ordersOnProdutsService.update(productId, orderId , updateOrdersOnProdutDto);
  }

  @Delete('/products/:productId/orders/:orderId')
  remove(@Param('productId') productId: number, @Param("orderId") orderId: number) {
    return this.ordersOnProdutsService.remove(productId, orderId);
  }
}
