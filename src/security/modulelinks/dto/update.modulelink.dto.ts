import { Injectable } from "@nestjs/common";
import { IsBoolean, IsNumber, IsString, isNumber } from "class-validator";

@Injectable()
export class UpdateModuleLinkDto{
    @IsString()
    linkeNameMenuName: string
    @IsNumber()
     moduleId: number
     @IsNumber()
     menuOrSubmenuStatus: number
     @IsBoolean()
     activeStatus: boolean
}