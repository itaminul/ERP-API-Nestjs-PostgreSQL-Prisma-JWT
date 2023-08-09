import { Injectable } from "@nestjs/common";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class UpdateDepartmentDto{
    @IsString()
    departmentName: string

    @IsOptional()
    @IsString()
    departmentDes: string

    @IsBoolean()
    activeStatus: boolean
    @IsNotEmpty()
    @IsNumber()
    orgId: number
    @IsNumber()
    serialNo: number
}