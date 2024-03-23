import { Injectable } from "@nestjs/common";
import { IsNumber, IsOptional, IsString, IsNotEmpty } from "class-validator";

@Injectable() 
export class CreateExamSetupDto {
    @IsString()
    examName: string
    @IsOptional()
    @IsString()
    examDescription: string
    @IsNumber()
    @IsNotEmpty()
    examType: number
    @IsNotEmpty()
    @IsString()
    examStartDate: string
    @IsNotEmpty()
    @IsString()
    examEndDate: string
    @IsNotEmpty()
    @IsString()
    examStartTime: string
    @IsNotEmpty()
    @IsString()
    examEndTime: string
    
}