import { Injectable } from '@nestjs/common';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@Injectable()
export class CreateDistrictDto {
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

  @IsNotEmpty()
  @IsNumber()
  divisionId
}
