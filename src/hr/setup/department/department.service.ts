import { Body, Inject, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { UpdateDepartmentDto } from './dto/update.department.dto';
import { CreateDepartmentDto } from './dto/create.department.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { sleep } from 'src/sleep';
@Injectable()
export class DepartmentService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache, private readonly prisma: PrismaService) {}

  async getAll(authUserInfo) {
     const key = 'department-find-all';
     const departmentCached = await this.cacheManager.get(key);
     if (departmentCached) {
       return departmentCached;
     }
     const departments = await this.prisma.department.findMany({
       orderBy: [{ id: 'desc' }],
       where: { orgId: authUserInfo.orgId },
     });
    // await sleep(3000);
     await this.cacheManager.set(key, departments, 10); 
     return departments;
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
    const { departmentName, departmentDes, orgId,serialNo } = dto;
    await this.prisma.department.create({
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
