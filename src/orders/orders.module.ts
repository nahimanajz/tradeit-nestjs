import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ProductsService } from 'src/products/products.service';
import { OrdersOnProductsService } from 'src/orders-on-produts/orders-on-produts.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, ProductsService, OrdersOnProductsService]
})
export class OrdersModule {}
