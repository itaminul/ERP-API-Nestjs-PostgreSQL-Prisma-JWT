import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateItemSupplierDto } from './dto/create.item.supplier.dto';
import { UpdateItemSupplierDto } from './dto/update.item.supplier.dto';

@Injectable()
export class ItemSupplierService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll(authUserInfo) {
        await this.prisma.invSupplier.findMany({
            where: {
                orgId: authUserInfo.id
            }
        })
    }

    async create(@Body() dto: CreateItemSupplierDto, authUserInfo) {
        const { supName, supDescription } = dto
        await this.prisma.invSupplier.create({
            data: {
                supName,
                supDescription,
                orgId: authUserInfo.id,
                createdBy: authUserInfo.id,
                createdDate: new Date().toLocaleDateString(),
                createdTime: new Date().toLocaleTimeString(),
                createdAt: new Date()
            }
        })
    }


    async update(@Param('id') id: number, @Body() dto: UpdateItemSupplierDto, authUserInfo) {
        const { supName, supDescription, activeStatus } = dto
        await this.prisma.invSupplier.update({
            where: {
                id: Number(id)
            },
            data: {
                supName,
                supDescription,
                activeStatus,
                updatedBy: authUserInfo.id,
                updatedDate: new Date().toLocaleDateString(),
                updatedTime: new Date().toLocaleTimeString(),
                updatedAt: new Date()
            }
        })
    }

}
