import { Injectable, Body, Param, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateLeaveDto } from './dto/create.leave.dto';
import { UpdateLeaveDto } from './dto/update.leave.dot';
@Injectable()
export class LeaveService {
  constructor(
    @Inject('CACHE_MANAGER') private cacheManager: Cache,
    private readonly prisma: PrismaService,
  ) {}

  async getAll() {
    let leaves = await this.prisma.leaveParent.findMany();
    if (leaves && leaves.length > 0) {
      await this.cacheManager.set('leaves', leaves);
      return await this.cacheManager.get('leaves');
    } else {
      throw new Error('No leaves found or leaves are undefined.');
    }
  }

  async getById(@Param('id') id: number) {
    return await this.prisma.leaveParent.findMany({
      where: {
        id: Number(id),
      },
    });
  }

  async create(@Body() dto: CreateLeaveDto, authUserInfo) {
    const {
      leaveStatus,
      leaveReasons,
      leaveDes,
      attachments,
      leaveLocation,
      emergencyContact,
    } = dto;
    return await this.prisma.leaveParent.create({
      data: {
        leaveStatus,
        leaveReasons,
        leaveDes,
        attachments,
        leaveLocation,
        emergencyContact,
        orgId: authUserInfo.orgId,
        createdBy: authUserInfo.id,
        createdDate: new Date().toLocaleDateString(),
        createdTime: new Date().toLocaleTimeString(),
        createdAt: new Date(),
      },
    });
  }

  async update(@Body() dto: UpdateLeaveDto, authUserInfo) {
    const {
      leaveStatus,
      leaveReasons,
      leaveDes,
      attachments,
      leaveLocation,
      emergencyContact,
      activeStatus,
    } = dto;
    return await this.prisma.leaveParent.create({
      data: {
        leaveStatus,
        leaveReasons,
        leaveDes,
        attachments,
        leaveLocation,
        emergencyContact,
        activeStatus,
        orgId: authUserInfo.orgId,
        updatedBy: authUserInfo.id,
        updatedDate: new Date().toLocaleDateString(),
        updatedTime: new Date().toLocaleTimeString(),
        updatedAt: new Date(),
      },
    });
  }
}
