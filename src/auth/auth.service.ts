import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(authDto: AuthDto): Promise<any> {
    const user = await this.userService.findOne({
      id: 0,
      email: authDto.email,
    });
    const {password, ...rest} = user

    const isMatch = await bcrypt.compare(user.password, authDto.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { email: user.email, role: user.role };
    const accessToken = await this.jwtService.signAsync(payload);
    return { ...rest, accessToken };
  }
  async signup(createUserDto: Prisma.UserCreateInput) {
    const password = await bcrypt.hash(createUserDto.password, 10);
    const user = await this.userService.create({ ...createUserDto, password });
    const {password:hashed, ...rest} =user
    const accessToken = await this.jwtService.signAsync(user);
    return { ...rest, accessToken };
  }
}
