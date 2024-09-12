import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ default: 0 })
  quantity: number;

  @ApiProperty({ default: 100 })
  price: number;

  @ApiProperty({ default: false })
  isFeatured: boolean;

  @ApiProperty()
  userId: number;
}
