import { Injectable } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class CreateBloodGroupsDto{
    @IsString()
    bloodGroupName: string

    @IsOptional()
    @IsString()
    bloodGroupDes: string
    
    @IsOptional()
    @IsNumber()
    serialNo: number
}