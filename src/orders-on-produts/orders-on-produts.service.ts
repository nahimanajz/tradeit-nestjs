import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { OrderProductDto } from './dto/create-order-product.dto';

@Injectable()
export class OrdersOnProductsService {

  constructor(private readonly dbService: DatabaseService) {}

  async create(dataDto: OrderProductDto) {
    return await this.dbService.ordersOnProducts.create({ data: dataDto });
  }

  async findAll() {
    return await this.dbService.ordersOnProducts.findMany({});
  }

  async findOne(productId:number, orderId:number) {
    return await this.dbService.ordersOnProducts.findMany({ where: { productId, orderId } });
  }

  async update(productId:number, orderId:number, data: Prisma.OrdersOnProductsUpdateInput) {
    return await this.dbService.ordersOnProducts.update({
      where: {
        productId_orderId:{
          orderId,
          productId
        }
      },
      data,
    });
  }

  async remove(productId:number, orderId:number) {
    return await this.dbService.ordersOnProducts.delete({ where: { 
      productId_orderId:{
        productId,
        orderId
      }
     } });
  }
}
