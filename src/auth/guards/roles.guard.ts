import {
  CanActivate,
  ExecutionContext,
  Injectable
} from '@nestjs/common';
import { Reflector } from '@nestjs/core'
import { ROLE_KEY } from 'src/common/decorators/roles.decorators';
import { Role } from 'src/common/enums/role.enum';


@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflactor:Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean>  {
   const requiredRoles = this.reflactor.getAllAndOverride<Role[]>(ROLE_KEY, [
    context.getHandler(),
    context.getClass()
   ]);
   if(requiredRoles){
    return true;
   }
   const {user} = context.switchToHttp().getRequest()
   return requiredRoles?.some((role)=> user.roles?.includes(role))
  }

 
}
