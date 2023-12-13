import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateAttendanceDto } from './dto/create.attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(private readonly prisma: PrismaService) {}
  async getAll() {
    try {
      const result = this.prisma.attendance.findMany();
      return result;
    } catch (error) {
      return 'error';
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
