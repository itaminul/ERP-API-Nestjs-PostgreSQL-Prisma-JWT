import { Injectable } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class CreateDesignatinDto{
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
    @IsString()
    @IsOptional()
    createdBy
    
}