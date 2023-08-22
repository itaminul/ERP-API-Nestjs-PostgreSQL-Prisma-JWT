import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateInvItem } from './dto/create.inv.item.dto';
import { UpdateInvItem } from './dto/update.inv.item.dto';

@Injectable()
export class ItemSetupService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll(authUserInfo) {
        return await this.prisma.invItem.findMany({
            where: {
                orgId: authUserInfo.id
            }
        })
    }

    async create(@Body() dto: CreateInvItem, authUserInfo) {
        const {
            categoryId,
            itemName,
            itemDescription,
            supplierId,
            unitOfMeasurment,
            manufactureBy,
            manufactureDate,
            expireDate
        } = dto
        await this.prisma.invItem.create({
            data: {
                categoryId,
                itemName,
                itemDescription,
                supplierId,
                unitOfMeasurment,
                manufactureBy,
                manufactureDate,
                expireDate,
                orgId: authUserInfo.orgId,
                createdBy: authUserInfo.id,
                createdDate: new Date().toLocaleDateString(),
                createdTime: new Date().toLocaleTimeString(),
                createdAt: new Date()

            }
        })
    }

    async update(@Param('id') id: number, @Body() dto: UpdateInvItem, authUserInfo) {
        const {
            categoryId,
            itemName,
            itemDescription,
            supplierId,
            unitOfMeasurment,
            manufactureBy,
            manufactureDate,
            expireDate,
            activeStatus
        } = dto
        await this.prisma.invItem.create({
            data: {
                categoryId,
                itemName,
                itemDescription,
                supplierId,
                unitOfMeasurment,
                manufactureBy,
                manufactureDate,
                expireDate,
                activeStatus,
                orgId: authUserInfo.orgId,
                updatedBy: authUserInfo.id,
                updatedDate: new Date().toLocaleDateString(),
                updatedTime: new Date().toLocaleTimeString(),
                updatedAt: new Date()

            }
        })
    }
}
