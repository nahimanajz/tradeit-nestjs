import { ApiProperty } from "@nestjs/swagger";
import { OrderStatus } from "src/common/enums/status.enum";

export class OrderPayDto {
    @ApiProperty({required:true, enum: ["Pending","PAID", "DELIVERED"]})
    status: OrderStatus
}