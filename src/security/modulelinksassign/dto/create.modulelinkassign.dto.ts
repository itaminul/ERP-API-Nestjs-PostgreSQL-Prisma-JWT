import { Injectable } from '@nestjs/common';
import { IsBoolean, IsNumber } from 'class-validator';
@Injectable()
export class CreateModuleLinkAssing {
  @IsNumber()
  moduleId;
  @IsNumber()
  moduleLinkId;
  @IsNumber()
  userLabel;
  @IsBoolean()
  permissionStatus;
}
