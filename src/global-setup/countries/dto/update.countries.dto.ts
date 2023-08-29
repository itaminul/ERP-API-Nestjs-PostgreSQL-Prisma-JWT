import { Injectable } from "@nestjs/common";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class UpdateCountriesDto {
    @IsString()
    countryName: string
    @IsOptional()
    @IsString()
    countryDescription: string
    @IsOptional()
    @IsNumber()
    countryCode: number
    @IsBoolean()
    activeStatus: boolean
}
