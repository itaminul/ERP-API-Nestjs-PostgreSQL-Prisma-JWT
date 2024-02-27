import { Injectable } from '@nestjs/common';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsObject,
  ValidateNested,
  IsBoolean,
} from 'class-validator';
import { UpdateChildLeaveDto } from './update.child.leave.dto';

@Injectable()
export class UpdateLeaveDto {
  @IsObject()
  @ValidateNested()
  @Type(() => UpdateChildLeaveDto)
  @IsNumber()
  leaveStatus: number;
  @IsString()
  leaveReasons: string;
  @IsString()
  leaveDes: string;
  @IsString()
  @IsOptional()
  attachments: string;
  @IsString()
  leaveLocation: string;
  @IsString()
  @IsOptional()
  emergencyContact: string;
  @IsBoolean()
  activeStatus: boolean;
}
