import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateReviewDto } from './dto/create-review-dto';
import { ApiOkResponse, ApiSecurity } from '@nestjs/swagger';

@Injectable()
export class ReviewsService {

  constructor(private readonly dbService: DatabaseService) { }
  @ApiSecurity("bearer")
  @ApiOkResponse({
    type:CreateReviewDto,
    description: "Review submitted",
    status:200
  })
  async create(createReview: CreateReviewDto): Promise<CreateReviewDto>{
    return await this.dbService.reviews.create({ data: createReview});
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
