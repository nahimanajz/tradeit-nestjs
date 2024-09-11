import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Prisma } from '@prisma/client';

@Controller('auth')
export class AuthController {
    constructor(private auth: AuthService){}
    
    @HttpCode(HttpStatus.OK)
    @Post('login')

    async signIn(@Body() payload:AuthDto){
        return this.auth.signIn(payload)
    }

    @HttpCode(HttpStatus.OK)
    @Post('signup')

    async signUp(@Body() payload:Prisma.UserCreateInput){
        return this.auth.signup(payload)
    }
    
}
