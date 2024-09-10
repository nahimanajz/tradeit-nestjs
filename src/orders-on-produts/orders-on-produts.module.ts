import { Module } from '@nestjs/common';
import { OrdersOnProductsService } from './orders-on-produts.service';
import { OrdersOnProdutsController } from './orders-on-produts.controller';

@Module({
  controllers: [OrdersOnProdutsController],
  providers: [OrdersOnProductsService],
})
export class OrdersOnProdutsModule {}
