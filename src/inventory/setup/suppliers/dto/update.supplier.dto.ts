import { Injectable } from '@nestjs/common';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

@Injectable()
export class UpdateSupplierDto {
  @IsString()
  supplierName: string;
  @IsOptional()
  @IsString()
  supplierDescription: string;
  @IsNumber()
  countryId: number;
  @IsBoolean()
  activeStatus: boolean;
}
