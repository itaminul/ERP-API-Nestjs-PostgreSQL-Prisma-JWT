import { Injectable, NotAcceptableException } from "@nestjs/common";
import { UserService } from "src/users/user.service";
import { PrismaService } from "src/database/prisma/prisma.service";
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService{
    constructor( 
        private useService: UserService, 
        private prisma: PrismaService
        ) {}


    async validateUser(username: string, password: string) {
        const user = await this.prisma.users.findFirst({
            where: {
                username: username
            },
            select: {
                username: true,
                password: true
            }
        })
        const passwordValid = await bcrypt.compare(password, user.password)

        if(!user) {
            throw new NotAcceptableException('Cound not find the user');
        }

        /*
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
          }
          */

        if(user && passwordValid) {
            return {
               // userId: user.id,
                userName: user.username,
               // userEmail: user.emailAddress,
               // userMobile: user.mobileNumber,
               // userRoleId: user.roleId,
                //userOrgId: user.orgId
            }
        }
        return null;
    }
}