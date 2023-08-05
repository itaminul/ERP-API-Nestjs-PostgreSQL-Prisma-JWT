import { Body, Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import * as bcrypt from 'bcrypt'
@Injectable()
export class UserService{
    constructor(private readonly prisma: PrismaService){}

    async signUp(@Body() body: any) {
        const{ username, password} = body
        const saltOrRounds = 10;
        const hashedPasword = await bcrypt.hash(password, saltOrRounds)        
        const data = await this.prisma.users.create({
            data: {
                username: username,
                password: hashedPasword,
                createdDate: new Date().toLocaleDateString(),
                createdTime: new Date().toLocaleTimeString()

            }
        })
    }
    

    async getUserByuserName(username: string) {
        const data = await this.prisma.users.findMany({
            where: {
                username: username
            }
        })



    }

}