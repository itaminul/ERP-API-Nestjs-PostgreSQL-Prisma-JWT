import { Injectable } from "@nestjs/common";
import {IsBoolean, IsNumber, IsOptional } from "class-validator";

@Injectable()
export class UpdateRequisitionChdDto {

    @IsOptional()
    @IsNumber()
    uomId
    @IsOptional()
    @IsNumber()
    qty
    @IsOptional()
    @IsNumber()
    price
    @IsOptional()
    @IsNumber()
    orgId
    @IsOptional()
    @IsBoolean()
    activeStatus
}
