import { Body, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateAttendanceDto } from './dto/create.attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(
    @Inject('CACHE_MANAGER') private cacheManager: Cache,
    private readonly prisma: PrismaService,
  ) {}
  async getAll() {
    let attendance = await this.prisma.attendance.findMany();
    if (attendance && attendance.length > 0) {
      await this.cacheManager.set('designations', attendance);
      return await this.cacheManager.get('attendance');
    } else {
      throw new Error('No attendance found or attendance are undefined.');
    }
  }

  async create(@Body() dto: CreateAttendanceDto) {
    const { attendanceDate, logInTime, logOutTime, orgId, biometricId } = dto;
    try {
      const result = await this.prisma.attendance.create({
        data: {
          biometricId,
          attendanceDate,
          logInTime,
          logOutTime,
          orgId,
        },
      });
      return result;
    } catch (error) {
      console.log('error', error);
    }
  }
}
