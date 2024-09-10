import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class OrdersService {
  
  constructor(private readonly dbService: DatabaseService) {}

  async create(createProductDto: Prisma.OrdersCreateInput) {
    return await this.dbService.orders.create({ data: createProductDto });
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
