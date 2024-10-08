import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, SignupDto } from './dto/auth.dto';
import { Prisma } from '@prisma/client';
import { Public } from 'src/common/decorators/public.decorator';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Authorizations')
@Controller('auth')
@Public()
export class AuthController {
  
    constructor(private auth: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() payload: AuthDto) {

    return await this.auth.signIn(payload);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signup')
  @ApiResponse({})
  
  async signUp(@Body() payload: SignupDto) {
    return this.auth.signup(payload);
  }
}
