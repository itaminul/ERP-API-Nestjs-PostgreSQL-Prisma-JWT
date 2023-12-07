import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Users } from '@prisma/client';
// import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { compare } from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
    private prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/getAllUser')
  async getAllUser() {
    try {
      const getTotalUser = await this.userService.getAllTotalUser();
      const results = await this.userService.getAllUser();
      return {
        message: 'Show Successfully',
        success: true,
        status: HttpStatus.OK,
        results,
        getTotalUser,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/getAllActiveUsers')
  async getAllActiveUsers(@AuthUserInfo() authUserInfo: Users) {
    try {
      const totalActiveUser = await this.userService.getAllTotalActiveUsers();
      const results = await this.userService.getAllActiveUsers(authUserInfo);
      return {
        message: 'Show Successfully',
        success: true,
        status: HttpStatus.OK,
        results,
        totalActiveUser,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/getAllInActiveUsers')
  async getAllInActiveUsers(@AuthUserInfo() authUserInfo: Users) {
    try {
      const totalInactiveUser =
        await this.userService.getAllTotalInActiveUsers();
      const results = await this.userService.getAllInActiveUsers(authUserInfo);
      return {
        message: 'Show Successfully',
        success: true,
        status: HttpStatus.OK,
        results,
        totalInactiveUser,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @Post('/register')
  async signUp(@Body() body: any) {
    try {
      const results = await this.userService.signUp(body);
      return {
        message: 'User Created Successfully',
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  // @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() dto: LoginUserDto) {
    const checkUserExists = await this.prisma.users.findUnique({
      where: {
        username: dto.username,
        activeStatus: true,
      },
    });
    console.log('checkUserExists', checkUserExists);

    if (!checkUserExists) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const checkPassword = await compare(dto.password, checkUserExists.password);

    delete checkUserExists.password;
    if (checkPassword) {
      const accessToken = this.generateJWT({
        sub: checkUserExists.id,
        username: checkUserExists.username,
        emailAddress: checkUserExists.emailAddress,
        mobileNumber: checkUserExists.mobileNumber,
        deptId: checkUserExists.deptId,
        desigId: checkUserExists.desigId,
        roleId: checkUserExists.roleId,
        orgId: checkUserExists.orgId,
      });

      return {
        statusCode: 200,
        message: 'Login Successfully',
        accessToken: accessToken,
        //   userInfo:userInfo
      };
    } else {
      throw new HttpException(
        'User or password not match',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
  generateJWT(payload: any) {
    return this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_SECRET'),
      expiresIn: this.configService.get('expired'),
    });
  }

  @Get('/logout')
  async logout(@Request() req) {
    req.session.destroy();
    return { msg: 'The user session has ended' };
  }
}
