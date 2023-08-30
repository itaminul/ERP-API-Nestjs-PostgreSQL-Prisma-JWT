import { Injectable } from "@nestjs/common";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable() 
export class UpdateItemGroup {
    @IsOptional()
    @IsNumber()
    udId: number
    @IsString()
    groupName: string
    @IsOptional()
    @IsString()
    groupDescription: string
    @IsOptional()
    @IsString()
    remarks: string
    @IsBoolean()
    activeStatus: boolean
}