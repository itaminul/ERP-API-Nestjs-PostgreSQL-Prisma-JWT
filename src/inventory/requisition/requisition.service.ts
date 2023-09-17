import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class RequisitionService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll(authUserInfo) {
        return await this.prisma.requisitionParent.findMany({
            where: {
                orgId: authUserInfo.orgId
            }
        })
    }

    async create(@Body() body: any, authUserInfo) {
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
            reqChdList

        } = body;
        const [reqCusParent] = await this.prisma.$transaction([
            this.prisma.requisitionParent.create({
                data: {
                    requisitionNo,
                    requisitionType,
                    requisitionFrom,
                    requisitionTo,
                    requisitionStatus,
                    requisitionDate: new Date(requisitionDate).toISOString(),
                    requisitionRemarks,
                    requisitionAppCanRemarks,
                    requisitionBy,
                    orgId: authUserInfo.orgId,
                    createdAt: new Date().toISOString(),
                    createdTime: new Date().toLocaleTimeString(),
                    createdBy: authUserInfo.id,
                    createdDate: new Date().toISOString(),
                    requisitionChild: {
                        create: body.reqChdList
                    }
                }
            })
        ])
        return { reqCusParent }
    }


    async update(@Param('id') id: number, @Body() dto: any, authUserInfo) {
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
            reqChdList
        } = dto


        const deleteM = await this.prisma.requisitionChild.deleteMany({
            where: {
                requisitionId: Number(id)
            }
        })
        const [reqCusParent] = await this.prisma.$transaction([
            this.prisma.requisitionParent.update({
                where: {
                    id: Number(id)
                },
                data: {
                    requisitionNo,
                    requisitionType,
                    requisitionFrom,
                    requisitionTo,
                    requisitionStatus,
                    requisitionDate: new Date(requisitionDate).toISOString(),
                    requisitionRemarks,
                    requisitionAppCanRemarks,
                    requisitionBy,
                    orgId: authUserInfo.orgId,
                    updatedAt: new Date().toISOString(),
                    updatedTime: new Date().toLocaleTimeString(),
                    updatedBy: authUserInfo.id,
                    updatedDate: new Date().toLocaleDateString(),
                    requisitionChild: {
                        create: dto.reqChdList
                    }
                }
            })
        ])
        return { reqCusParent }
    }
}

