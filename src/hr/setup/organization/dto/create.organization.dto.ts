import { Injectable } from '@nestjs/common';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@Injectable()
export class CreateOrganizationDto {
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
}
