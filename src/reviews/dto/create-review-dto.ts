import { ApiProperty } from "@nestjs/swagger"

export class CreateReviewDto{
    @ApiProperty({required:true})
    text:string  

    @ApiProperty({required:true})
    rating: number
    
    @ApiProperty({required:true})
    productId:number
}