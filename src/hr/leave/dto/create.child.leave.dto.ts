import { Injectable } from '@nestjs/common';
import { IsString, IsNumber, IsOptional } from 'class-validator';
@Injectable()
export class CreateChildLeaveDto {
  @IsString()
  leaveFromDate: string;
  @IsString()
  leaveToDate: string;
  @IsString()
  @IsOptional()
  leaveFromTime: string;
  @IsString()
  leaveToTime: string;
}
