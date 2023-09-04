import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateDesignatinDto } from './dto/create.designation.dto';
import { UpdateDesignatinDto } from './dto/update.designation.dto';

@Injectable()
export class DesignationService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll(authUserInfo) {
        return await this.prisma.designation.findMany({
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

    async getById(@Param('id') id: number, authUserInfo) {
        return await this.prisma.designation.findMany({
            orderBy: [
                {
                    id: 'desc'
                }
            ],
            where: {
                id: Number(id),
                orgId: authUserInfo.orgId
            }
        })
    }


    async getAllActive() {
        return await this.prisma.designation.findMany({
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

    async create(@Body() dto: CreateDesignatinDto, authUserInfo) {
        const { designationName, designationDes, orgId, serialNo } = dto
        await this.prisma.designation.create({
            data: {
                designationName,
                designationDes,
                orgId,
                serialNo,
                createdDate: new Date().toLocaleDateString(),
                createdTime: new Date().toLocaleTimeString(),
                createdAt: new Date(),
                createdBy: authUserInfo.id,
            }
        })
    }

    async update(@Param('id') id: number, @Body() dto: UpdateDesignatinDto, authUserInfo) {
        const { designationName, designationDes, orgId, serialNo, activeStatus } = dto

        return await this.prisma.designation.update({
            where: {
                id: Number(id)
            },
            data: {
                designationName,
                designationDes,
                activeStatus,
                orgId,
                serialNo,
                updatedDate: new Date().toLocaleDateString(),
                updatedTime: new Date().toLocaleTimeString(),
                updatedAt: new Date(),
                updatedBy: authUserInfo.id,
            }
        })
    }
}
