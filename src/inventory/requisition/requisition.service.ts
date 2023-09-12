import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateRequisitionDto } from './dto/create-requisition.dot';
import { UpdateRequisitionDto } from './dto/update-requisition.dot';

@Injectable()
export class RequisitionService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll() {
        return await this.prisma.requisitionParent.findMany()
    }

    
    async create(@Body() dto: CreateRequisitionDto, authUserInfo) {
        const {
            requisitionNo,
            requisitionType,
            requisitionFrom,
            requisitionTo,
            requisitionStatus,
            requisitionDate,
            requisitionRemarks,
            requisitionAppCanRemarks,
            requisitionBy,
            orgId
        } = dto
        return await this.prisma.requisitionParent.create({
            data: {
                requisitionNo,
                requisitionType,
                requisitionFrom,
                requisitionTo,
                requisitionStatus,
                requisitionDate,
                requisitionRemarks,
                requisitionAppCanRemarks,
                requisitionBy,
                orgId: authUserInfo.orgId,
                createdAt: new Date().toISOString(),
                createdTime: new Date().toLocaleTimeString(),
                createdBy: authUserInfo.id,
                createdDate: new Date().toISOString()
            }
        })
    }

    async update(@Param('id') id: number, @Body() dto: UpdateRequisitionDto, authUserInfo) {
        const {
            requisitionNo,
            requisitionType,
            requisitionFrom,
            requisitionTo,
            requisitionStatus,
            requisitionDate,
            requisitionRemarks,
            requisitionAppCanRemarks,
            requisitionBy,
        } = dto
        return await this.prisma.requisitionParent.update({
            where: {
                id: Number(id)
            },
            data: {
                requisitionNo,
                requisitionType,
                requisitionFrom,
                requisitionTo,
                requisitionStatus,
                requisitionDate,
                requisitionRemarks,
                requisitionAppCanRemarks,
                requisitionBy,
                orgId: authUserInfo.orgId,
                updatedAt: new Date().toISOString(),
                updatedTime: new Date().toLocaleTimeString(),
                updatedBy: authUserInfo.id,
                updatedDate: new Date().toLocaleDateString()
            }
        })
    }
}
