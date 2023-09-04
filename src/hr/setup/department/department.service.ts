import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { UpdateDepartmentDto } from './dto/update.department.dto';
import { CreateDepartmentDto } from './dto/create.department.dto';

@Injectable()
export class DepartmentService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll(authUserInfo) {
        return await this.prisma.department.findMany({
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
        return await this.prisma.department.findMany({
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
        return await this.prisma.department.findMany({
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

    async create(@Body() dto: CreateDepartmentDto, authUserInfo) {
        const { departmentName, departmentDes, orgId, serialNo } = dto
        await this.prisma.department.create({
            data: {
                departmentName: departmentName,
                departmentDes: departmentDes,
                orgId: orgId,
                serialNo: serialNo,
                createdDate: new Date().toLocaleDateString(),
                createdTime: new Date().toLocaleTimeString(),
                createdAt: new Date(),
                createdBy: authUserInfo.id,
            }
        })
    }

    async update(@Param('id') id: number, @Body() dto: UpdateDepartmentDto, authUserInfo) {
        const { departmentName, departmentDes, orgId, serialNo, activeStatus } = dto
        return await this.prisma.department.update({
            where: {
                id: Number(id)
            },
            data: {
                departmentName: departmentName,
                departmentDes: departmentDes,
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
