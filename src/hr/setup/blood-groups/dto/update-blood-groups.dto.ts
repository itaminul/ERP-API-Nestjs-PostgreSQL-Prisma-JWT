import { Injectable } from "@nestjs/common";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class UpdateBloodGroupsDto{
    @IsString()
    bloodGroupName: string

    @IsOptional()
    @IsString()
    bloodGroupDes: string
    
    @IsOptional()
    @IsNumber()
    serialNo: number

    @IsOptional()
    @IsBoolean()
    activeStatus: boolean
}