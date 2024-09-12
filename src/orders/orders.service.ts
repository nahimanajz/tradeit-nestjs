import { OrdersOnProductsService } from './../orders-on-produts/orders-on-produts.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { OrderDto } from './dto/create-order-dto';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly dbService: DatabaseService,
    private readonly productsService: ProductsService,
    private readonly ordersOnProductsService: OrdersOnProductsService,
  ) {}
  /**
   *
   * TODO:
   * @Description
   * Get product by id,
   * deduct queantity
   * update new quantity using Product service
   * then place an order
   * Incase ordered quantity ordered is unavailable throw exception
   *  and consume order-product service to save it
   *
   **/
  async create(createOrderDto: OrderDto) {
    const product = await this.productsService.findOne(
      createOrderDto.productId
    );
    if (product.quantity < createOrderDto.quantity) {
      throw new Error('Insufficient quantity');
    }
     await this.productsService.update(
      createOrderDto.productId,
      { quantity: product.quantity - createOrderDto.quantity },
    );
    const order = await this.dbService.orders.create({ data: createProductDto })

    const {productId, userId} = createOrderDto;

    const productOrder = await this.ordersOnProductsService.create({productId, userId, orderId: order})

    return order;
  }

  async findAll() {
    return await this.dbService.orders.findMany({});
  }

  async findOne(id: number) {
    return await this.dbService.orders.findUnique({ where: { id } });
  }

  async update(id: number, updateProductDto: Prisma.OrdersUpdateInput) {
    return await this.dbService.orders.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    return await this.dbService.orders.delete({ where: { id } });
  }
}
