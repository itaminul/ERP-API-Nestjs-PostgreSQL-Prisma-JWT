import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateDivisionDto } from './dto/create-division.dto';
import { UpdateDivisionDto } from './dto/update-division.dto';

@Injectable()
export class DivisionService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll(authUserInfo) {
        return await this.prisma.division.findMany({
            orderBy: [
                {
                    id: 'desc'
                }
            ],
            where: {
                orgId: authUserInfo.orgId
            }
        })
    }

    async getActiveAll() {
        return await this.prisma.division.findMany({
            orderBy: [
                {
                    id: 'desc'
                }
            ],
            where: {
                activeStatus: true
            }
        })
    }

    async getById(@Param('id') id: number) {
        return await this.prisma.division.findMany({
            orderBy: [
                {
                    id: 'desc'
                }
            ],
            where: {
                id: Number(id),
                activeStatus: true
            }
        })
    }

    async create(@Body() dto: CreateDivisionDto, authUserInfo) {
        const { divisionName, divisionDes, orgId, serialNo } = dto
        await this.prisma.division.create({
            data: {
                divisionName,
                divisionDes,
                orgId: orgId,
                serialNo: serialNo,
                createdDate: new Date().toLocaleDateString(),
                createdTime: new Date().toLocaleTimeString(),
                createdAt: new Date(),
                createdBy: authUserInfo.id,
            }
        })
    }

    async update(@Param('id') id: number, @Body() dto: UpdateDivisionDto, authUserInfo) {
        const { divisionName, divisionDes, orgId, serialNo, activeStatus } = dto
        return await this.prisma.division.update({
            where: {
                id: Number(id)
            },
            data: {
                divisionName: divisionName,
                divisionDes: divisionDes,
                activeStatus: activeStatus,
                orgId: orgId,
                serialNo: serialNo,
                updatedDate: new Date().toLocaleDateString(),
                updatedTime: new Date().toLocaleTimeString(),
                updatedAt: new Date(),
                updatedBy: authUserInfo.id,
            }
        })
    }

}

