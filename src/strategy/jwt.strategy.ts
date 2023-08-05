import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
 import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';

 
@Injectable()
export class LocalStrategyJwt extends PassportStrategy(Strategy, 'jwt') {
  constructor(private authService: AuthService,
    private configService: ConfigService
    ) {
    super(
        {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey:configService.get('JWT_SECRET')
        }
    );
  }
 /*
 
   async validate(payload: {username: string}) {
      const user = await this.prisma.users.findUnique({
          where: {
              username: payload.username
          }
      })
    //   delete user.password
      return user;
  }
  async validate(username: string, password: string):Promise<any> {
    // const [users] = username
    console.log("uu", username)
      const user = this.authService.validateUser(username, password);
      if(!user){
        throw new  UnauthorizedException();
      }
      return user
  }*/

  async validate(payload: any) {
    //console.log("pay", payload)
    return {
      id: payload.sub,
      username: payload.username,
      emailAddress: payload.emailAddress,
      mobileNumber: payload.mobileNumber,
      deptId: payload.deptId,
      desigId: payload.desigId,
      roleId: payload.roleId,
      orgId:payload.orgId,
    }
  }
}