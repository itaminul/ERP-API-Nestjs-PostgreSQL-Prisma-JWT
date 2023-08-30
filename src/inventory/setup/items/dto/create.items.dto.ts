import { Injectable } from "@nestjs/common";
import { IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";

@Injectable()
export class CreateItemDto {
    @IsOptional()
    @IsNumber()
    udId
    @IsOptional()
    @IsString()
    itemCode
    @IsOptional()
    @IsString()
    modelNo
    @IsString()
    itemName
    @IsOptional()
    @IsString()
    itemDescription
    @IsOptional()
    @IsNumberString()
    costPrice
    @IsOptional()
    @IsNumberString()
    salePrice
    @IsOptional()
    @IsString()
    manufactureDate
    @IsOptional()
    @IsString()
    expireDate
    @IsOptional()
    @IsNumberString()
    taxRate
    @IsOptional()
    @IsNumber()
    reorderLabel
    @IsOptional()
    @IsString()
    itemImage
    @IsOptional()
    @IsString()
    remarks
    @IsOptional()
    @IsNumber()
    orgId
}