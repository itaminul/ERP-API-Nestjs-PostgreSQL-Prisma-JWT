import { Injectable } from "@nestjs/common";
import { IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class UpdateDivisionDto{
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

    @IsOptional()
    @IsNumber()
    activeStatus: boolean

}