import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateProductDto } from "./create-product.dto";

export class UpdatProductDto extends PartialType<CreateProductDto> {
  @ApiProperty()
  name: string;

  @ApiProperty({ default: 0 })
  quantity: number;

  @ApiProperty({ default: 100 })
  price: number;

  @ApiProperty({ default: false })
  isFeatured: boolean;

}
