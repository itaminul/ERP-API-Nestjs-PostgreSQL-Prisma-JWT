import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateBloodGroupsDto } from './dto/create-blood-groups.dto';
import { UpdateBloodGroupsDto } from './dto/update-blood-groups.dto';

@Injectable()
export class BloodGroupsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(authUserInfo) {
    return await this.prisma.bloodgroup.findMany({
      orderBy: [
        {
          id: 'desc',
        },
      ]
    });
  }

  async getById(@Param('id') id: number, authUserInfo) {
    return await this.prisma.bloodgroup.findMany({
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
  }

  async getAllActive() {
    return await this.prisma.bloodgroup.findMany({
      orderBy: [
        {
          id: 'desc',
        },
      ],
      where: {
        activeStatus: true,
      },
    });
  }

  async create(@Body() dto: CreateBloodGroupsDto, authUserInfo) {
    const { bloodGroupName, bloodGroupDes, serialNo } = dto;
    await this.prisma.bloodgroup.create({
      data: {
        bloodGroupName,
        bloodGroupDes,
        serialNo,
        createdDate: new Date().toLocaleDateString(),
        createdTime: new Date().toLocaleTimeString(),
        createdAt: new Date(),
        createdBy: authUserInfo.id,
      },
    });
  }

  async update(
    @Param('id') id: number,
    @Body() dto: UpdateBloodGroupsDto,
    authUserInfo,
  ) {
    const { bloodGroupName, bloodGroupDes, serialNo, activeStatus } = dto;

    return await this.prisma.bloodgroup.update({
      where: {
        id: Number(id),
      },
      data: {
        bloodGroupName,
        bloodGroupDes,
        activeStatus,
        serialNo,
        updatedDate: new Date().toLocaleDateString(),
        updatedTime: new Date().toLocaleTimeString(),
        updatedAt: new Date(),
        updatedBy: authUserInfo.id,
      },
    });
  }
}
