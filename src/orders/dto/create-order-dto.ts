import { ApiProperty } from '@nestjs/swagger';
import { OrderStatus } from 'src/common/enums/status.enum';

export class OrderDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  productId: number;

  @ApiProperty({ default: 'Pending' })
  status: OrderStatus 

  @ApiProperty()
  quantity: number;
}
