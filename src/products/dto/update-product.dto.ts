import { ApiProperty } from "@nestjs/swagger";

export class UpdateProductDto  {
  @ApiProperty()
  name: string;

  @ApiProperty({ default: 0 })
  quantity: number;

  @ApiProperty({ default: 100 })
  price: number;

  @ApiProperty({ default: false })
  isFeatured: boolean;

}
