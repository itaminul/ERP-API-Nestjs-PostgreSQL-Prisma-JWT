import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateOrganizationDto } from './dto/create.organization.dto';
import { UpdateOrganizationDto } from './dto/update.organization.dto';

@Injectable()
export class OrganizationService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.organization.findMany({
      orderBy: [
        {
          id: 'desc',
        },
      ],
    });
  }

  async getActiveAll() {
    return await this.prisma.organization.findMany({
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
    return await this.prisma.organization.findMany({
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

  async create(@Body() dto: CreateOrganizationDto, authUserInfo) {
    const { orgName, orgDescription, orgId, serialNo } = dto;
    await this.prisma.organization.create({
      data: {
        orgName: orgName,
        orgDescription: orgDescription,
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
    @Body() dto: UpdateOrganizationDto,
    authUserInfo,
  ) {
    const { orgName, orgDescription, serialNo, activeStatus } = dto;
    return await this.prisma.organization.update({
      where: {
        id: Number(id),
      },
      data: {
        orgName: orgName,
        orgDescription: orgDescription,
        activeStatus: activeStatus,
        serialNo: serialNo,
        updatedDate: new Date().toLocaleDateString(),
        updatedTime: new Date().toLocaleTimeString(),
        updatedAt: new Date(),
        updatedBy: authUserInfo.id,
      },
    });
  }
}
