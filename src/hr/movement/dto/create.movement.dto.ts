import { Injectable } from '@nestjs/common';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@Injectable()
export class CreateMovementDto {
  @IsNumber()
  empId: number;
  @IsOptional()
  @IsNumber()
  clientId: number;
  @IsOptional()
  @IsNumber()
  projectId: number;
  @IsNumber()
  movementStatus: number;
  @IsString()
  movementReasons: string;
  @IsOptional()
  @IsString()
  movementDes: string;
  @IsString()
  movementFromDate: string;
  @IsString()
  movementToDate: string;
  @IsOptional()
  @IsString()
  movementFromTime: string;
  @IsOptional()
  @IsString()
  movementToTime: string;
  @IsOptional()
  @IsString()
  emergencyContact: string;
}
