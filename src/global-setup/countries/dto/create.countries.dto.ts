import { Injectable } from '@nestjs/common';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@Injectable()
export class CreateCountriesDto {
  @IsString()
  countryName: string;
  @IsOptional()
  @IsString()
  countryDescription: string;
  @IsOptional()
  @IsNumber()
  countryCode: number;
}
