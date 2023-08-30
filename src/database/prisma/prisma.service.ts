import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { ConfigService } from '@nestjs/config'
@Injectable()

export class PrismaService extends PrismaClient implements OnModuleInit {
    users: any;
    raw(arg0: string) {
        throw new Error('Method not implemented.');
    }
constructor(configService: ConfigService){
    super({
        datasources: {
            db: {
                url: configService.get('DATABASE_URL')
            }
        }
        
    })
    console.log("db url : "+ configService.get('DATABASE_URL'))
}
    async onModuleInit() {
        await this.$connect();
    }


}
