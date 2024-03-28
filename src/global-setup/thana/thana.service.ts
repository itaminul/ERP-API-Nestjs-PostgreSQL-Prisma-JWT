import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateThanaDto } from './dto/create-thana.dto';
import { UpdateThanatDto } from './dto/update-thana.dto';
@Injectable()
export class ThanaService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(authUserInfo) {
    return await this.prisma.thana.findMany({
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

  async getActiveAll() {
    return await this.prisma.thana.findMany({
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

  async getById(@Param('id') id: number) {
    return await this.prisma.thana.findMany({
      orderBy: [
        {
          id: 'desc',
        },
      ],
      where: {
        id: Number(id),
        activeStatus: true,
      },
    });
  }

  async create(@Body() dto: CreateThanaDto, authUserInfo) {
    const { thanaName, thanaDes, serialNo, dristrictId } = dto;
    await this.prisma.thana.create({
      data: {
        thanaName,
        thanaDes,
        serialNo: serialNo,
        dristrictId,
        createdDate: new Date().toLocaleDateString(),
        createdTime: new Date().toLocaleTimeString(),
        createdAt: new Date(),
        createdBy: authUserInfo.id,
      },
    });
  }

  async update(
    @Param('id') id: number,
    @Body() dto: UpdateThanatDto,
    authUserInfo,
  ) {
    const { thanaName, thanaDes, serialNo, dristrictId, activeStatus } = dto;
    return await this.prisma.thana.update({
      where: {
        id: Number(id),
      },
      data: {
        thanaName,
        thanaDes,
        activeStatus: activeStatus,
        serialNo: serialNo,
        dristrictId,
        updatedDate: new Date().toLocaleDateString(),
        updatedTime: new Date().toLocaleTimeString(),
        updatedAt: new Date(),
        updatedBy: authUserInfo.id,
      },
    });
  }
}
