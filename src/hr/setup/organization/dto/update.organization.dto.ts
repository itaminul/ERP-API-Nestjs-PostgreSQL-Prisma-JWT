import { Injectable } from '@nestjs/common';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

@Injectable()
export class UpdateOrganizationDto {
  @IsString()
  orgName: string;
  @IsOptional()
  @IsString()
  orgDescription: string;
  @IsOptional()
  @IsNumber()
  orgId: number;
  @IsOptional()
  @IsNumber()
  serialNo: number;
  @IsOptional()
  @IsBoolean()
  activeStatus: boolean;
}
