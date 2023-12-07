import { Injectable } from '@nestjs/common';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@Injectable()
export class CreatePermanentAddressDto {
  @IsOptional()
  @IsNumber()
  perCityCor: number;
  @IsOptional()
  @IsNumber()
  perWord;
  @IsOptional()
  @IsNumber()
  perWordNo;
  @IsOptional()
  @IsNumber()
  perBasHolding;
  @IsOptional()
  @IsString()
  perPostOfficeCode;
}
