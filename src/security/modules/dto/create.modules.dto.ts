import { Injectable } from '@nestjs/common';
import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
  ValidateIf,
} from 'class-validator';

@Injectable()
export class CreateModulesDto {
  @IsNotEmpty()
  @MinLength(5)
  @IsString()
  moduleName: string;

  @IsString()
  moduleDes: string;

  @IsNumber()
  orgId: number;
}
