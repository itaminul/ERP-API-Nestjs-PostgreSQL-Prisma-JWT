import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateItemGroup } from './dto/create.item.group.dto';
import { UpdateItemGroup } from './dto/update.item.group.dto';

@Injectable()
export class ItemGroupService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(authUserInfo) {
    return await this.prisma.invItemsGroup.findMany({
      where: {
        orgId: authUserInfo.id,
      },
    });
  }

  async create(@Body() createItemGroup: CreateItemGroup, authUserInfo) {
    const { udId, groupName, groupDescription, remarks } = createItemGroup;
    await this.prisma.invItemsGroup.create({
      data: {
        udId,
        groupName,
        groupDescription,
        remarks,
        orgId: authUserInfo.orgId,
        createdBy: authUserInfo.id,
        createdDate: new Date().toLocaleDateString(),
        createdTime: new Date().toLocaleTimeString(),
        createdAt: new Date(),
      },
    });
  }
  async update(
    @Param('id') id: number,
    @Body() updateItemGroup: UpdateItemGroup,
    authUserInfo,
  ) {
    const { udId, groupName, groupDescription, remarks, activeStatus } =
      updateItemGroup;
    await this.prisma.invItemsGroup.update({
      where: {
        id: Number(id),
      },
      data: {
        udId,
        groupName,
        groupDescription,
        remarks,
        activeStatus,
        orgId: authUserInfo.orgId,
        updatedBy: authUserInfo.id,
        updatedDate: new Date().toLocaleDateString(),
        updatedTime: new Date().toLocaleTimeString(),
        updatedAt: new Date(),
      },
    });
  }
}
