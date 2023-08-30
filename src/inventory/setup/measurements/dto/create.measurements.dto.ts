import { Injectable } from "@nestjs/common";
import { IsNumber, IsOptional, IsString } from "class-validator";

@Injectable() 
export class CreateMeasurementsDto {
    @IsString()
    measurementName: string
    @IsOptional()
    @IsString()
    measurementDescription: string
    @IsOptional()
    @IsString()
    remarks: string
}
