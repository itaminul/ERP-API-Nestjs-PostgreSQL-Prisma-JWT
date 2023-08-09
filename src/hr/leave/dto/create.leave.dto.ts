import { Injectable } from '@nestjs/common';
import { Type } from "class-transformer";
import { IsString, IsNumber, IsOptional, IsObject, ValidateNested } from 'class-validator'
import { CreateChildLeaveDto } from './create.child.leave.dto'
@Injectable()
export class CreateLeaveDto {
    @IsObject()
    @ValidateNested()
    @Type(() => CreateChildLeaveDto)

    @IsNumber()
    leaveStatus: number
    @IsString()
    leaveReasons: string
    @IsString()
    leaveDes: string
    @IsString()
    @IsOptional()
    attachments: string
    @IsString()
    leaveLocation: string
    @IsString()
    @IsOptional()
    emergencyContact: string
}
