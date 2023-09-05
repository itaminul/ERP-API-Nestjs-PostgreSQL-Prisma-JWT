import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateEmployeeDto } from 'src/hr/employee/dto/create.employee.dto';
import { UpdateEmployeeTypeDto } from './dto/update-emp-type.dto';
import { CreateEmployeeTypeDto } from './dto/create-emp-type.dto';

@Injectable()
export class EmployeeTypeService {

    constructor(private readonly prisma: PrismaService) { }

    async getAll(authUserInfo) {
        return await this.prisma.employeeType.findMany({
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
        return await this.prisma.employeeType.findMany({
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
        return await this.prisma.employeeType.findMany({
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

    async create(@Body() dto: CreateEmployeeTypeDto, authUserInfo) {
        const { empTypeName, empTypeDes, serialNo } = dto
        await this.prisma.employeeType.create({
            data: {
                empTypeName,
                empTypeDes, 
                serialNo,
                createdDate: new Date().toLocaleDateString(),
                createdTime: new Date().toLocaleTimeString(),
                createdAt: new Date(),
                createdBy: authUserInfo.id,
            }
        })
    }

    async update(@Param('id') id: number, @Body() dto: UpdateEmployeeTypeDto, authUserInfo) {
        const { empTypeName, empTypeDes, serialNo, activeStatus } = dto
        return await this.prisma.employeeType.update({
            where: {
                id: Number(id)
            },
            data: {
                empTypeName,
                empTypeDes,
                activeStatus,
                serialNo,
                updatedDate: new Date().toLocaleDateString(),
                updatedTime: new Date().toLocaleTimeString(),
                updatedAt: new Date(),
                updatedBy: authUserInfo.id,
            }
        })
    }
}
