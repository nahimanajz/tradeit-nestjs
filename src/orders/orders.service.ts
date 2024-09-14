import { OrdersOnProductsService } from './../orders-on-produts/orders-on-produts.service';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { OrderDto } from './dto/create-order-dto';
import { ProductsService } from 'src/products/products.service';
import { OrderPayDto } from './dto/order-pay-dto';
import { OrderStatus } from 'src/common/enums/status.enum';

@Injectable()
export class OrdersService {
  constructor(
    private readonly dbService: DatabaseService,
    private readonly ordersOnProductsService: OrdersOnProductsService,
    private readonly productsService: ProductsService,
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
   * and consume order-product service to save it
   *
   **/
  async create(createOrderDto: OrderDto) {
    const product = await this.productsService.findOne(
      createOrderDto.productId,
    );
    if (product.quantity < createOrderDto.quantity) {
      throw new Error('Insufficient quantity');
    }
    await this.productsService.update(createOrderDto.productId, {
      quantity: product.quantity - createOrderDto.quantity,
    });

    const { productId, status, userId } = createOrderDto;
    const order = await this.dbService.orders.create({
      data: {
        status,
        userId,
      },
    });

    return await this.ordersOnProductsService.create({
      productId,
      orderId: order.id,
    });

   
  }

  async findAll() {
    return await this.dbService.orders.findMany({});
  }

  async findOne(id: number) {
    return await this.dbService.orders.findUnique({ where: { id } });
  }

  async update(id: number, orderPayDto: OrderPayDto) {
    return await this.dbService.orders.update({
      where: { id },
      data: orderPayDto,
    });
  }

  async remove(id: number) {
    return await this.dbService.orders.delete({ where: { id } });
  }
}
