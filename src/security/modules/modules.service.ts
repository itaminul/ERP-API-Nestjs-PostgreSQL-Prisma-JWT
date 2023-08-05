import { Body, Injectable, Param, Request } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateModulesDto } from './dto/create.modules.dto';
import { UpdateModulesDto } from './dto/update.modules.dto';

@Injectable()
export class ModulesService {
    constructor(private readonly prisma: PrismaService){}
    async getAll() {
        return  await this.prisma.allModule.findMany()
    }

    async getAllByOrganizationWise(authUserInfo) {
        return await this.prisma.allModule.findMany({
            where: {
                orgId: authUserInfo.orgId,
                activeStatus: true
            }

        })
    }

    async create(@Body() dto: CreateModulesDto, authUserInfo) {
        const { moduleName, moduleDes, orgId } = dto;
        const data = await this.prisma.allModule.create({
            data: {
                moduleName:moduleName,
                moduleDes:moduleDes,
                createdDate: new Date().toLocaleDateString(),
                createdTime: new Date().toLocaleTimeString(),
                createdAt: new Date(),
                orgId: orgId,
                createdBy: authUserInfo.id
            }
        })
    }

    async update(@Param('id') id: number, @Body() body: UpdateModulesDto, authUserInfo: any) {
        const { moduleName, moduleDes, activeStatus } = body
        const data = await this.prisma.allModule.update({
            where: {
                id: Number(id)
            },
            data: {
                moduleName:moduleName,
                moduleDes:moduleDes,
                activeStatus: activeStatus,
                updatedDate: new Date().toLocaleDateString(),
                updatedTime: new Date().toLocaleTimeString(),
                updatedAt: new Date(),
                orgId: authUserInfo.orgId,
              //  updatedBy: authUserInfo.id
            }
        })
    }

    
}


//git config --global user.email "aminul@atilimited.net"
//git config --global user.name "aminul"
//git remote add origin http://192.168.0.164/aminul/ati-erp-server.git (push)