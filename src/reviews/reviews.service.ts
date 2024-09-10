import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ReviewsService {

  constructor(private readonly dbService: DatabaseService) { }

  async create(createProductDto: Prisma.ReviewsCreateInput) {
    return await this.dbService.reviews.create({ data: createProductDto });
  }

  async findAll() {
    return await this.dbService.reviews.findMany({});
  }

  async findOne(id: number) {
    return await this.dbService.reviews.findUnique({ where: { id } });
  }

  async update(id: number, updateProductDto: Prisma.ReviewsUpdateInput) {
    return await this.dbService.reviews.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    return await this.dbService.reviews.delete({ where: { id } });
  }
}
