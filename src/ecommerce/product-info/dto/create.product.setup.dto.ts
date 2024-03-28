import { Injectable } from '@nestjs/common';
import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

@Injectable()
export class CreateProductSetupDto {
  @IsOptional()
  @IsNumber()
  udId;
  @IsOptional()
  @IsString()
  itemCode;
  @IsOptional()
  @IsString()
  modelNo;
  @IsNotEmpty()
  @IsString()
  itemName;
  @IsOptional()
  @IsString()
  itemDescription;
  @IsOptional()
  @IsNumber()
  costPrice;
  @IsOptional()
  @IsNumber()
  salePrice;
  @IsOptional()
  @IsString()
  manufactureDate;
  @IsOptional()
  @IsString()
  expireDate;
  @IsOptional()
  @IsNumber()
  taxRate;
  @IsOptional()
  @IsNumber()
  reorderLabel;
  @IsOptional()
  @IsString()
  itemImage;
  @IsOptional()
  @IsString()
  remarks;
  @IsOptional()
  @IsNumber()
  orgId;
}
