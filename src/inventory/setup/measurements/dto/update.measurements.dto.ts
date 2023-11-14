import { Injectable } from '@nestjs/common';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

@Injectable()
export class UpdateMeasurementsDto {
  @IsString()
  measurementName: string;
  @IsOptional()
  @IsString()
  measurementDescription: string;
  @IsOptional()
  @IsString()
  remarks: string;
  @IsBoolean()
  activeStatus: boolean;
}
