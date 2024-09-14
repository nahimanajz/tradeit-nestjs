import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { FindUserDto } from 'src/auth/dto/auth.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {
  
  constructor(private readonly databaseService: DatabaseService) {}
  
  async create(createUserDto: Prisma.UserCreateInput) {
    return await this.databaseService.user.create({ data: createUserDto });
  }

  async findAll() {
    return await this.databaseService.user.findMany({});
  }

  async findOne(user: FindUserDto) {
    const condition = user.id !== 0 ? { id: user.id } : { email: user.email };
    return await this.databaseService.user.findUnique({
      where: condition
    });
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return await this.databaseService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.databaseService.user.delete({ where: { id } });
  }
}
