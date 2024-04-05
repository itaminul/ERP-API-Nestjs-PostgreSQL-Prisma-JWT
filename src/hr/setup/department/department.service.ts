import { Body, Inject, Injectable, Param } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma/prisma.service';
import { UpdateDepartmentDto } from './dto/update.department.dto';
import { CreateDepartmentDto } from './dto/create.department.dto';
import { Cache } from 'cache-manager';
@Injectable()
export class DepartmentService {
  constructor(
    @Inject('CACHE_MANAGER') private cacheManager: Cache,
    private readonly prisma: PrismaService,
  ) {}

  async getAll(authUserInfo) {
    const departments = await this.prisma.department.findMany({
      where: {
        orgId: authUserInfo.orgId
      },
      orderBy: [{ id: 'desc' }],
    });

    if (departments && departments.length > 0) {
      await this.cacheManager.set('departments', departments);
      const departmentData = await this.cacheManager.get('departments');
      return departmentData;
    } else {
      throw new Error('No departments found or departments are undefined.');
    }
  }

  async getActiveAll() {
    return await this.prisma.department.findMany({
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
    return await this.prisma.department.findMany({
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

  async create(@Body() dto: CreateDepartmentDto, authUserInfo) {
    const { departmentName, departmentDes, orgId, serialNo } = dto;
    const createdDepartment = await this.prisma.department.create({
      data: {
        departmentName: departmentName,
        departmentDes: departmentDes,
        orgId: orgId,
        serialNo: serialNo,
        createdDate: new Date().toLocaleDateString(),
        createdTime: new Date().toLocaleTimeString(),
        createdAt: new Date(),
        createdBy: authUserInfo.id,
      },
    });
     await this.cacheManager.set(
       `departments${createdDepartment.id}`,
       createdDepartment,
     );
  }

  async update(
    @Param('id') id: number,
    @Body() dto: UpdateDepartmentDto,
    authUserInfo,
  ) {
    const { departmentName, departmentDes, orgId, serialNo, activeStatus } =
      dto;
    return await this.prisma.department.update({
      where: {
        id: Number(id),
      },
      data: {
        departmentName: departmentName,
        departmentDes: departmentDes,
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
