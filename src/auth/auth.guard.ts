import { CanActivate, ExecutionContext, Injectable,UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/common/constants';
import { extractTokenFromHeader } from 'src/common/helpers';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwt: JwtService){}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
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
