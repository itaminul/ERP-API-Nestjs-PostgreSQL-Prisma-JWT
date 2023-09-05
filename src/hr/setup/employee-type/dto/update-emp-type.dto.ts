import { Injectable } from "@nestjs/common";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class UpdateEmployeeTypeDto{
    @IsString()
    empTypeName: string
    @IsOptional()
    @IsString()
    empTypeDes: string
    @IsOptional()
    @IsNumber()
    serialNo: number
    @IsBoolean()
    activeStatus: boolean
}