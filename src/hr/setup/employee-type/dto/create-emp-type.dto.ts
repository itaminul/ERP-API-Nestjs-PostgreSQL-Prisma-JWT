import { Injectable } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class CreateEmployeeTypeDto{
    @IsString()
    empTypeName: string
    @IsOptional()
    @IsString()
    empTypeDes: string
    @IsOptional()
    @IsNumber()
    serialNo: number
}