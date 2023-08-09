import { Injectable } from "@nestjs/common";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class UpdateDesignatinDto{
    @IsString()
    designationName: string

    @IsOptional()
    @IsString()
    designationDes:  string

    @IsNotEmpty()
    @IsNumber()
    orgId: number
    @IsNumber()
    serialNo: number
    
    @IsBoolean()
    activeStatus: boolean
}