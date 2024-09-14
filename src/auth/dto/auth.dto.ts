import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Role } from 'src/common/enums/role.enum';

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

export class SignupDto {
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

  @ApiProperty({
    enum: ["ADMIN", "SELLER", "BUYER"]
  })
  role: Role
}

export class FindUserDto {
  @ApiProperty({ description: "user Id" })
  id?: number;

  @ApiProperty({  })

  email?: string;
}
