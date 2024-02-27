import { Injectable } from '@nestjs/common';
import { IsNumber, IsString, isNumber } from 'class-validator';

@Injectable()
export class CreateModuleLinkDto {
  @IsString()
  linkeNameMenuName: string;
  @IsNumber()
  moduleId: number;
  @IsNumber()
  menuOrSubmenuStatus: number;
}
