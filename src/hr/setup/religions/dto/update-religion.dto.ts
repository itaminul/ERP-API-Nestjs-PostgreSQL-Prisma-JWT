import { Injectable } from "@nestjs/common";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class UpdateReligionDto{
    @IsString()
    religionName: string
    @IsOptional()
    @IsString()
    religionDes: string
    @IsOptional()
    @IsNumber()
    serialNo: number
    @IsOptional()
    @IsBoolean()
    activeStatus: boolean
}