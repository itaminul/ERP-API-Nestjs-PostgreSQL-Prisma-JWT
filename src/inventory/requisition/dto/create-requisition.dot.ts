import { Injectable } from "@nestjs/common";
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class CreateRequisitionDto {
    @IsString()
    requisitionNo
    @IsOptional()
    @IsNumber()
    requisitionType
    @IsOptional()
    @IsNumber()
    requisitionFrom
    @IsOptional()
    @IsNumber()
    requisitionTo
    @IsOptional()
    @IsNumber()
    itemGroupId
    @IsOptional()
    @IsNumber()
    itemId    
    @IsDate()
    requisitionDate
    @IsOptional()
    @IsNumber()
    requisitionStatus
    @IsOptional()
    @IsString()
    requisitionRemarks
    @IsOptional()
    @IsString()
    requisitionAppCanRemarks
    @IsNumber()
    requisitionBy
    @IsOptional()
    @IsNumber()
    orgId
}

//requisitionNo,requisitionType,requisitionFrom,requisitionTo,itemGroupId,itemId,requisitionStatus,requisitionDate,requisitionRemarks,requisitionAppCanRemarks,requisitionBy
