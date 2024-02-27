import { Injectable } from '@nestjs/common';
import { IsNumber, IsString } from 'class-validator';

@Injectable()
export class CreateEduInfoDto {
  @IsNumber()
  degreeId;
  @IsNumber()
  boardId;
  @IsNumber()
  resultType;
  @IsString()
  resultGPA;
  @IsString()
  resultDivision;
  @IsString()
  certificateImage;
}
