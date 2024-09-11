import { CanActivate, ExecutionContext, Injectable,UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/common/constants';
import { IS_PUBLIC_KEY } from 'src/common/decorators/public.decorator';
import { extractTokenFromHeader } from 'src/common/helpers';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwt: JwtService, private reflector: Reflector){}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    // permit publicly annotated routes
    const isPublic = this.reflector.getAllAndOverride<Boolean>(IS_PUBLIC_KEY,[
      context.getHandler(),
      context.getClass()
    ])
    if(isPublic){
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = extractTokenFromHeader(request)
    
    if(!token){
      throw new UnauthorizedException()
    }
    try {
        const payload = await this.jwt.verifyAsync(token, {secret: jwtConstants.secret})
        request['user'] = payload
    } catch (error) {
        throw new UnauthorizedException();
    }
    return true
  }

 
}
