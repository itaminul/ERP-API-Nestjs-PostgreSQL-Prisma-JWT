import { Injectable } from "@nestjs/common";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class UpdateDesignatinDto{
    @IsString()
    designationName: string

    @IsOptional()
    @IsString()
    designationDes:  string

    @IsOptional()
    @IsNumber()
    orgId: number

    @IsOptional()
    @IsNumber()
    serialNo: number

    @IsOptional()    
    @IsBoolean()
    activeStatus: boolean
    @IsString()
    @IsOptional()
    updatedBy
}