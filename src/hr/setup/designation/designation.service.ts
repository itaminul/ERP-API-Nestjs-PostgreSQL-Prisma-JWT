import { Body, Inject, Injectable, Param } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { PrismaService } from '../../../database/prisma/prisma.service';
import { CreateDesignatinDto } from './dto/create.designation.dto';
import { UpdateDesignatinDto } from './dto/update.designation.dto';

@Injectable()
export class DesignationService {
  constructor(
    @Inject('CACHE_MANAGER') private cacheManager: Cache,
    private readonly prisma: PrismaService,
  ) {}

  async getAll(authUserInfo) {
    let designations = await this.prisma.designation.findMany({
      orderBy: [
        {
          id: 'desc',
        },
      ],
      where: {
        orgId: authUserInfo.orgId,
      },
    });
    if (designations && designations.length > 0) {
      await this.cacheManager.set('designations', designations);
      return await this.cacheManager.get('designations');
    } else {
      throw new Error('No designations found or designations are undefined.');
    }
  }

  async getById(@Param('id') id: number, authUserInfo) {
    let designationsById = await this.prisma.designation.findMany({
      orderBy: [
        {
          id: 'desc',
        },
      ],
      where: {
        id: Number(id),
        orgId: authUserInfo.orgId,
      },
    });
    if (designationsById && designationsById.length > 0) {
      await this.cacheManager.set('designationsById', designationsById);
      return await this.cacheManager.get('designationsById');
    } else {
      throw new Error(
        'No designationsById found or designationsById are undefined.',
      );
    }
  }

  async getAllActive() {
    let activeDesignation = await this.prisma.designation.findMany({
      orderBy: [
        {
          id: 'desc',
        },
      ],
      where: {
        activeStatus: true,
      },
    });
    if (activeDesignation && activeDesignation.length > 0) {
      await this.cacheManager.set('activeDesignation', activeDesignation);
      return await this.cacheManager.get('activeDesignation');
    } else {
      throw new Error(
        'No active designation found or active designation are undefined.',
      );
    }
  }

  async create(@Body() dto: CreateDesignatinDto, authUserInfo) {
    const { designationName, designationDes, orgId, serialNo } = dto;
    let createData = await this.prisma.designation.create({
      data: {
        designationName,
        designationDes,
        orgId,
        serialNo,
        createdDate: new Date().toLocaleDateString(),
        createdTime: new Date().toLocaleTimeString(),
        createdAt: new Date(),
        createdBy: authUserInfo.id,
      },
    });
    return createData;
  }

  async update(
    @Param('id') id: number,
    @Body() dto: UpdateDesignatinDto,
    authUserInfo,
  ) {
    const { designationName, designationDes, orgId, serialNo, activeStatus } =
      dto;

    return await this.prisma.designation.update({
      where: {
        id: Number(id),
      },
      data: {
        designationName,
        designationDes,
        activeStatus,
        orgId,
        serialNo,
        updatedDate: new Date().toLocaleDateString(),
        updatedTime: new Date().toLocaleTimeString(),
        updatedAt: new Date(),
        updatedBy: authUserInfo.id,
      },
    });
  }
}
