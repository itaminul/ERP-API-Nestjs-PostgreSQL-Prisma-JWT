import { Injectable } from '@nestjs/common';
import { IsBoolean, IsNotEmpty, IsString, MinLength } from 'class-validator';

@Injectable()
export class UpdateModulesDto {
  @IsNotEmpty()
  @MinLength(5)
  @IsString()
  moduleName: string;

  @IsString()
  moduleDes: string;

  @IsBoolean()
  activeStatus: boolean;
}
