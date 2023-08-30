import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateSupplierDto } from './dto/create.supplier.dto';
import { UpdateSupplierDto } from './dto/update.supplier.dto';

@Injectable()
export class SuppliersService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll(authUserInfo) {
        return await this.prisma.invSupplier.findMany({
            where: {
                orgId: authUserInfo.id
            }
        })
    }

    async create(@Body() createSupplierDto: CreateSupplierDto, authUserInfo) {
        const { supplierName, supplierDescription, countryId } = createSupplierDto
        await this.prisma.invSupplier.create({

            data: {
                supplierName,
                supplierDescription,
                countryId,
                orgId: authUserInfo.orgId,
                createdBy: authUserInfo.id,
                createdDate: new Date().toLocaleDateString(),
                createdTime: new Date().toLocaleTimeString(),
                createdAt: new Date()

            }
        })
    }
    async update(@Param('id') id: number, @Body() updateSupplierDto: UpdateSupplierDto, authUserInfo) {
        const { supplierName, supplierDescription, countryId, activeStatus } = updateSupplierDto
        await this.prisma.invSupplier.update({
            where: {
                id: Number(id)
            },
            data: {
                supplierName,
                supplierDescription,
                countryId,
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
