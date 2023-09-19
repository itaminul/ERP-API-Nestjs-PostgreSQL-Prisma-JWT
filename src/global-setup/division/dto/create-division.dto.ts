import { Injectable } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class CreateDivisionDto{
    @IsString()
    divisionName: string

    @IsOptional()
    @IsString()
    divisionDes: string

    @IsOptional()
    @IsNumber()
    orgId: number

    @IsOptional()
    @IsNumber()
    serialNo: number
}