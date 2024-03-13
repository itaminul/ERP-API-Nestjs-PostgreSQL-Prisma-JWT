import { Injectable } from '@nestjs/common';
import {  IsNumber, IsOptional, IsString } from 'class-validator';

@Injectable()
export class CreateDepartmentDto {
  @IsString()
  departmentName: string;

  @IsOptional()
  @IsString()
  departmentDes: string;

  @IsOptional()
  @IsNumber()
  orgId: number;

  @IsOptional()
  @IsNumber()
  serialNo: number;
}
