import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateItemDto } from './dto/create.items.dto';
import { UpdateItemDto } from './dto/update.items.dto';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(page = 1, authUserInfo) {
    return await this.prisma.invItemSetup.findMany({
      take: 10,
      skip: 10 * (page - 1),
      where: {
        orgId: authUserInfo.orgId,
      },
    });
  }

  async create(@Body() dto: CreateItemDto, authUserInfo) {
    const {
      udId,
      itemCode,
      modelNo,
      itemName,
      itemDescription,
      costPrice,
      salePrice,
      manufactureDate,
      expireDate,
      taxRate,
      reorderLabel,
      itemImage,
      remarks,
      orgId,
    } = dto;
    return await this.prisma.invItemSetup.create({
      data: {
        udId,
        itemCode,
        modelNo,
        itemName,
        itemDescription,
        costPrice,
        salePrice,
        manufactureDate,
        expireDate,
        taxRate,
        reorderLabel,
        itemImage,
        remarks,
        orgId: authUserInfo.orgId,
        createdAt: new Date().toISOString(),
        createdTime: new Date().toLocaleTimeString(),
        createdBy: authUserInfo.id,
        createdDate: new Date().toISOString(),
      },
    });
  }

  async update(
    @Param('id') id: number,
    @Body() dto: UpdateItemDto,
    authUserInfo,
  ) {
    const {
      udId,
      itemCode,
      modelNo,
      itemName,
      itemDescription,
      costPrice,
      salePrice,
      manufactureDate,
      expireDate,
      taxRate,
      reorderLabel,
      itemImage,
      remarks,
      orgId,
    } = dto;
    return await this.prisma.invItemSetup.update({
      where: {
        id: Number(id),
      },
      data: {
        udId,
        itemCode,
        modelNo,
        itemName,
        itemDescription,
        costPrice,
        salePrice,
        manufactureDate,
        expireDate,
        taxRate,
        reorderLabel,
        itemImage,
        remarks,
        orgId: authUserInfo.orgId,
        updatedAt: new Date().toISOString(),
        updatedTime: new Date().toLocaleTimeString(),
        updatedBy: authUserInfo.id,
        updatedDate: new Date().toLocaleDateString(),
      },
    });
  }
}
