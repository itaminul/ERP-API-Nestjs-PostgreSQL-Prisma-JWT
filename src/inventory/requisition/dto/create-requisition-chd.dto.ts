import { Injectable } from "@nestjs/common";
import {IsNumber, IsOptional } from "class-validator";

@Injectable()
export class CreateRequisitionChdDto {
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
}


