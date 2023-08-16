import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateInvItem } from './dto/create.inv.item.dto';
import { UpdateInvItem } from './dto/update.inv.item.dto';

@Injectable()
export class ItemSetupService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll() {
        return await this.prisma.invItem.findMany()
    }

    async create(@Body() dto: CreateInvItem) {
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
                expireDate

            }
        })
    }

    async update(@Body() dto: UpdateInvItem) {
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
                activeStatus

            }
        })
    }
}
