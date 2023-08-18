import { Injectable } from "@nestjs/common";
import { IsBoolean, IsString } from "class-validator";

@Injectable()
export class UpdateItemSupplierDto {
    @IsString()
    supName: string
    @IsString()
    supDescription: string
    @IsBoolean()
    activeStatus: boolean
}