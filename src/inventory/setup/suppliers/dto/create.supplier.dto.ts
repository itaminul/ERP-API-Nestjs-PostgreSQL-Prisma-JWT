import { Injectable } from "@nestjs/common";
import { IsNumber, IsOptional, IsString } from "class-validator";

@Injectable() 
export class CreateSupplierDto {
    @IsString()
    supplierName: string
    @IsOptional()
    @IsString()
    supplierDescription: string
    @IsNumber()
    countryId: number
}