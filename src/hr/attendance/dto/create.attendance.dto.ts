import { Injectable } from '@nestjs/common';
import { IsNumber, IsString } from 'class-validator';

@Injectable()
export class CreateAttendanceDto {
  @IsString()
  attendanceDate: string;
  @IsString()
  logInTime: string;
  @IsString()
  logOutTime: string;
  @IsNumber()
  biometricId: number;
  @IsNumber()
  machineId: number;
  @IsNumber()
  shiftId: number;
  @IsNumber()
  orgId: number;
}
