import { Injectable } from "@nestjs/common";
import { IsString } from "class-validator";

@Injectable()
export class CreateItemSupplierDto {
    @IsString()
    supName: string
    @IsString()
    supDescription: string
}