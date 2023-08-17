import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateInvItem } from './dto/create.inv.item.dto';
import { UpdateInvItem } from './dto/update.inv.item.dto';

@Injectable()
export class ItemSetupService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll() {
        return await this.prisma.invItem.findMany()
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
                updatedBy: authUserInfo.id,
                updatedDate: new Date().toLocaleDateString(),
                updatedTime: new Date().toLocaleTimeString(),
                updatedAt: new Date()

            }
        })
    }
}
