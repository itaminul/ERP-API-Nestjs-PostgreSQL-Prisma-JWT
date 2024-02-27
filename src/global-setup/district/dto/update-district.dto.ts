import { Injectable } from '@nestjs/common';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@Injectable()
export class UpdateDistrictDto {
  @IsString()
  districtName: string;

  @IsOptional()
  @IsString()
  districtDes: string;

  @IsOptional()
  @IsNumber()
  orgId: number;

  @IsOptional()
  @IsNumber()
  serialNo: number;

  @IsOptional()
  @IsNumber()
  activeStatus: boolean;
}
