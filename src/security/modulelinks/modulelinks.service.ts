import { Injectable, Body, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateModuleLinkDto } from './dto/create.moduellink.dto';
import { UpdateModuleLinkDto } from './dto/update.modulelink.dto';
@Injectable()
export class ModulelinksService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.moduleLink.findMany();
  }

  async createModuleLink(@Body() body: CreateModuleLinkDto, authUserInfo) {
    const { moduleId, linkeNameMenuName, menuOrSubmenuStatus } = body;
    return await this.prisma.moduleLink.create({
      data: {
        moduleId: moduleId,
        linkeNameMenuName: linkeNameMenuName,
        menuOrSubmenuStatus: menuOrSubmenuStatus,
        createdDate: new Date().toLocaleDateString(),
        createdTime: new Date().toLocaleTimeString(),
        createdBy: authUserInfo.id,
        createdAt: new Date(),
      },
    });
  }

  async update(
    @Param('id') id: number,
    @Body() body: UpdateModuleLinkDto,
    authUserInfo,
  ) {
    const { moduleId, linkeNameMenuName, menuOrSubmenuStatus, activeStatus } =
      body;
    return await this.prisma.moduleLink.update({
      where: {
        id: Number(id),
      },
      data: {
        moduleId: moduleId,
        linkeNameMenuName: linkeNameMenuName,
        menuOrSubmenuStatus: menuOrSubmenuStatus,
        activeStatus: activeStatus,
        updatedDate: new Date().toLocaleDateString(),
        updatedTime: new Date().toLocaleTimeString(),
        updatedAt: new Date(),
        updatedBy: authUserInfo.id,
      },
    });
  }
}
