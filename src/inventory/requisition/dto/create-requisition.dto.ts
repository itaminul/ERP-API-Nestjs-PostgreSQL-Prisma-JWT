import { Injectable } from "@nestjs/common";
import { Type } from "class-transformer";
import { IsDate, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateRequisitionChdDto } from "./create-requisition-chd.dto";

@Injectable()
export class CreateRequisitionDto {

    @IsObject()
    @ValidateNested()
    @Type(() => CreateRequisitionChdDto)
    static reqChdList: any;
    reqChdList(arg0: string, reqChdList: any) {
        throw new Error('Method not implemented.');
    }

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


