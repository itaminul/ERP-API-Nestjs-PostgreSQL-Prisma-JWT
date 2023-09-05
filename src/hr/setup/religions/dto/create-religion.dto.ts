import { Injectable } from "@nestjs/common";
import { IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class CreateReligionDto{
    @IsString()
    religionName: string
    @IsOptional()
    @IsString()
    religionDes: string
    @IsOptional()
    @IsNumber()
    serialNo: number
}