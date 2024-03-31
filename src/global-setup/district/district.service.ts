import { Body, Injectable, Param } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class DistrictService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.district.findMany({
      orderBy: [
        {
          id: 'desc',
        },
      ],
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

  async getDistrictByDivisionId(@Param('id') id: number) {
    return await this.prisma.district.findMany({
      where: {
        divisionId: Number(id)
      }
    })
  }

  async create(@Body() dto: CreateDistrictDto, authUserInfo) {
    const { districtName, districtDes, orgId, serialNo, divisionId } = dto;
    await this.prisma.district.create({
      data: {
        districtName,
        districtDes,
        orgId: orgId,
        serialNo: serialNo,
        divisionId,
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
    const {
      districtName,
      districtDes,
      orgId,
      serialNo,
      activeStatus,
      divisionId,
    } = dto;
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
        divisionId,
        updatedDate: new Date().toLocaleDateString(),
        updatedTime: new Date().toLocaleTimeString(),
        updatedAt: new Date(),
        updatedBy: authUserInfo.id,
      },
    });
  }
}
