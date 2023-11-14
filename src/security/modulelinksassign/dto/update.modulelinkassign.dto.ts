import { Injectable } from '@nestjs/common';
import { IsBoolean, IsNumber } from 'class-validator';
@Injectable()
export class UpdateModuleLinkAssing {
  @IsNumber()
  moduleId;
  @IsNumber()
  moduleLinkId;
  @IsNumber()
  userLabel;
  @IsBoolean()
  permissionStatus;
  @IsBoolean()
  activeStatus;
}
