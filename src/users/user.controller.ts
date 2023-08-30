import { Body, Controller, Get, HttpException, HttpStatus, Post, Request, UseGuards } from '@nestjs/common'
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { compare } from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController{
constructor(
    private readonly  userService: UserService,
    private jwtService: JwtService,
    private prisma: PrismaService,
    private readonly configService: ConfigService
    ){}

      
@Get('/getAllUser')
async getAllUser() {
  try {
    const response = await this.userService.getAllUser()
    return { message: "Show successfully", status: HttpStatus.OK, response}
} catch (error) {
    if(error instanceof Prisma.PrismaClientKnownRequestError){

    }
    throw error;
}
}


@Post('/register')
async signUp(@Body() body: any) {
    try {
        const response = await this.userService.signUp(body)
        return { message: "User created successfully", status: HttpStatus.OK, response}
    } catch (error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError){

        }
        throw error;
    }
}

// @UseGuards(LocalAuthGuard)
@Post('/login')
async login(@Body() body:any, @Request() req) {
    const userInfo = {Users:req.session}
    // return { Users: req.user}
    // console.log("session", userInfo)
    const checkUserExists = await this.prisma.users.findFirst({
        where: {
          username: body.username,
        },
      });
      
      if (!checkUserExists) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      
      const checkPassword = await compare(
        body.password,
        checkUserExists.password,
      );
              
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
          orgId:checkUserExists.orgId,
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
        async logout(@Request() req){
            req.session.destroy();
            return { msg: 'The user session has ended' }
            }

}