import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @ApiProperty({
    description: 'email',
    default: 'Iamuser@example.net'
  })
  email: string;

  @ApiProperty({
    description: 'password',
    default: 'mY5trongSecret123'
  })
  password: string;
}

export class FindUserDto {
  @ApiProperty({ description: "user Id" })
  id?: number;

  @ApiProperty({  })

  email?: string;
}
