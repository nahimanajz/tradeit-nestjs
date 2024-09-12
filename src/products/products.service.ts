import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly dbService: DatabaseService) {}

  async create(createProductDto: Prisma.ProductsCreateInput) {

    return await this.dbService.products.create({ data: createProductDto });
  }

  async findAll() {
    return await this.dbService.products.findMany({});
  }

  async findOne(id: number) {
    return await this.dbService.products.findUnique({ where: { id } });
  }

  async update(id: number, updateProductDto: Prisma.ProductsUpdateInput) {
    return await this.dbService.products.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    return await this.dbService.products.delete({ where: { id } });
  }
}
