import { Injectable } from "@nestjs/common";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";
import { isBuiltin } from "module";

@Injectable()
export class UpdateMovementDto {
    @IsOptional()
    @IsNumber()
    clientId: number
    @IsOptional()
    @IsNumber()
    projectId: number
    @IsNumber()
    movementStatus: number
    @IsString()
    movementReasons: string
    @IsString()
    movementDes: string
    @IsString()
    movementFromDate: string
    @IsString()
    movementToDate: string
    @IsOptional()
    @IsString()
    movementFromTime: string
    @IsOptional()
    @IsString()
    movementToTime: string
    @IsString()
    emergencyContact: string
    @IsBoolean()
    activeStatus: boolean
    
}