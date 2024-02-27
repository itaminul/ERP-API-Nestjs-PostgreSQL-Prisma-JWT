import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateModuleLinkAssing } from './dto/create.modulelinkassign.dto';
import { UpdateModuleLinkAssing } from './dto/update.modulelinkassign.dto';

@Injectable()
export class ModulelinksassignService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.moduleLinkAssign.findMany();
  }

  async createModuleAssign(@Body() body: CreateModuleLinkAssing, authUserInfo) {
    const { moduleId, moduleLinkId, userLabel, permissionStatus } = body;
    return await this.prisma.moduleLinkAssign.create({
      data: {
        moduleId,
        moduleLinkId,
        userLabel,
        permissionStatus,
        createdDate: new Date().toLocaleDateString(),
        createdTime: new Date().toLocaleTimeString(),
        createdAt: new Date(),
        createdBy: authUserInfo.id,
      },
    });
  }

  async updateModuleAssign(
    @Param('id') id: number,
    @Body() body: UpdateModuleLinkAssing,
    authUserInfo,
  ) {
    const {
      moduleId,
      moduleLinkId,
      userLabel,
      permissionStatus,
      activeStatus,
    } = body;
    return await this.prisma.moduleLinkAssign.update({
      where: {
        id: Number(id),
      },
      data: {
        moduleId,
        moduleLinkId,
        userLabel,
        permissionStatus,
        updatedDate: new Date().toLocaleDateString(),
        updatedTime: new Date().toLocaleTimeString(),
        updatedAt: new Date(),
        updatedBy: authUserInfo.id,
        activeStatus,
      },
    });
  }
}
