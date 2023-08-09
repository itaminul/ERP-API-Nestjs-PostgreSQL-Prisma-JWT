import { Injectable, Body, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateLeaveDto } from './dto/create.leave.dto'
import { UpdateChildLeaveDto } from './dto/update.child.leave.dto';
import { UpdateLeaveDto } from './dto/update.leave.dot';
@Injectable()
export class LeaveService {
    constructor(private readonly prisma: PrismaService) {}

    async getAll() {
        return await this.prisma.leaveParent.findMany()
    }

    async getById(@Param('id') id: number) {
        return await this.prisma.leaveParent.findMany({
            where: {
                id: Number(id)
            }
        })
    }

    async create(@Body() dto: CreateLeaveDto, authUserInfo) {
        const{ leaveStatus, leaveReasons, leaveDes, attachments, leaveLocation, emergencyContact} = dto
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
                createdAt: new Date()
            }
        })
    }

    async update(@Body() dto: UpdateLeaveDto, authUserInfo) {
        const{ leaveStatus, leaveReasons, leaveDes, attachments, leaveLocation, emergencyContact, activeStatus} = dto
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
                updatedAt: new Date()
            }
        })
    }
}
