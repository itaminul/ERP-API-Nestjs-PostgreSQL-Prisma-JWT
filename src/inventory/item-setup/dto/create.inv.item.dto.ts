import { Injectable } from "@nestjs/common";
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class CreateInvItem {
    @IsOptional()
    @IsNumber()
    categoryId: number
    @IsString()
    itemName: string
    @IsOptional()
    @IsString()
    itemDescription: string
    @IsOptional()
    @IsNumber()
    supplierId: number
    @IsNumber()
    unitOfMeasurment: string
    @IsNumber()
    manufactureBy: number
    @IsDate()
    manufactureDate: Date
    @IsDate()
    expireDate: Date
}