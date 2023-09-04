import { Injectable } from "@nestjs/common";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class UpdateDepartmentDto{
    @IsString()
    departmentName: string

    @IsOptional()
    @IsString()
    departmentDes: string
    @IsOptional()
    @IsNumber()
    orgId: number
    @IsOptional()
    @IsNumber()
    serialNo: number
    @IsOptional()
    @IsBoolean()
    activeStatus: boolean
}