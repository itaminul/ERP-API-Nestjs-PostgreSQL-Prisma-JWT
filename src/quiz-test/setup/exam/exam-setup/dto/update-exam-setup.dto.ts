import { Injectable } from "@nestjs/common";
import { IsOptional, IsString } from "class-validator";

@Injectable() 
export class UpdateExamSetupDto {
    @IsString()
    examName: string
    @IsOptional()
    @IsString()
    examDescription: string
    
}