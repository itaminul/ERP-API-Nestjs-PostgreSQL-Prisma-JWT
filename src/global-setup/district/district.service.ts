import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

@Injectable()
export class DistrictService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(authUserInfo) {
    return await this.prisma.district.findMany({
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
    return await this.prisma.district.findMany({
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
    return await this.prisma.district.findMany({
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

  async create(@Body() dto: CreateDistrictDto, authUserInfo) {
    const { districtName, districtDes, orgId, serialNo } = dto;
    await this.prisma.district.create({
      data: {
        districtName,
        districtDes,
        orgId: orgId,
        serialNo: serialNo,
        createdDate: new Date().toLocaleDateString(),
        createdTime: new Date().toLocaleTimeString(),
        createdAt: new Date(),
        createdBy: authUserInfo.id,
      },
    });
  }

  async update(
    @Param('id') id: number,
    @Body() dto: UpdateDistrictDto,
    authUserInfo,
  ) {
    const { districtName, districtDes, orgId, serialNo, activeStatus } = dto;
    return await this.prisma.district.update({
      where: {
        id: Number(id),
      },
      data: {
        districtName: districtName,
        districtDes: districtDes,
        activeStatus: activeStatus,
        orgId: orgId,
        serialNo: serialNo,
        updatedDate: new Date().toLocaleDateString(),
        updatedTime: new Date().toLocaleTimeString(),
        updatedAt: new Date(),
        updatedBy: authUserInfo.id,
      },
    });
  }
}
