import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateReligionDto } from './dto/create-religion.dto';
import { UpdateReligionDto } from './dto/update-religion.dto';

@Injectable()
export class ReligionsService {
  constructor(private readonly prisma: PrismaService) {}
  async getAll(authUserInfo) {
    return await this.prisma.religion.findMany({
      orderBy: [
        {
          id: 'desc',
        },
      ],
      where: {
        orgId: authUserInfo.orgId,
      },
    });
  }

  async getById(@Param('id') id: number, authUserInfo) {
    return await this.prisma.religion.findMany({
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
    return await this.prisma.religion.findMany({
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

  async create(@Body() dto: CreateReligionDto, authUserInfo) {
    const { religionName, religionDes, serialNo } = dto;
    await this.prisma.religion.create({
      data: {
        religionName,
        religionDes,
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
    @Body() dto: UpdateReligionDto,
    authUserInfo,
  ) {
    const { religionName, religionDes, serialNo, activeStatus } = dto;

    return await this.prisma.religion.update({
      where: {
        id: Number(id),
      },
      data: {
        religionName,
        religionDes,
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
