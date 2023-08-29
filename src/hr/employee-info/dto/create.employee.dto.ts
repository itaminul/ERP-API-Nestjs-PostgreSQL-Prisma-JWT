import { Injectable } from "@nestjs/common";
import { Type } from "class-transformer";
import { IsBoolean, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateEduInfoDto } from "./create.eduinfo.dto";

@Injectable()

export class CreateEmployeeDto {

    @IsObject()
    @ValidateNested()
    @Type(() => CreateEduInfoDto)
    static empList: any;
    empList(arg0: string, empList: any) {
        throw new Error('Method not implemented.');
    }

    @IsOptional()
    @IsString()
    firstName: string


    @IsString()
    @IsOptional()
    middleName: string

    @IsOptional()
    @IsString()
    lastName: string

    @IsOptional()
    @IsString()
    fullName: string

    @IsOptional()
    @IsString()
    phone: string
    @IsOptional()
    @IsString()
    mobileOne:string
    @IsOptional()
    @IsString()
    mobileTwo: string
    @IsOptional()
    @IsString()
    emergencyMobile: string
    @IsOptional()
    @IsString()
    officeEmail: string
    @IsOptional()
    @IsString()
    personalEmail:string
    @IsOptional()
    @IsString()
    empImage:string
    @IsOptional()
    @IsString()
    empSignature:string
    @IsOptional()
    @IsNumber()
    nationalId: number
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    deptId: number
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    designationId: number
    @IsOptional()
    @IsString()
    dateOfBirts: string
    @IsOptional()
    @IsNumber()
    gender: number
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    religion: number
    @IsOptional()
    @IsBoolean()
    maritialStatus: boolean
    @IsOptional()
    @IsString()
    spousName: string
    @IsOptional()
    @IsString()
    spouseProfe
    @IsOptional()
    @IsString()
    fatherOrHusbandName
    @IsOptional()
    @IsString()
    fatherOrHusbandProfe
    @IsOptional()
    @IsString()
    fatherOrHusbandMobile
    @IsOptional()
    @IsString()
    motherName
    @IsOptional()
    @IsString()
    motherProfe
    @IsOptional()
    @IsString()
    motherMobile
    @IsOptional()
    @IsString()
    presentDivi
    @IsOptional()
    @IsNumber()
    presentDis
    @IsOptional()
    @IsNumber()
    presentPS
    @IsOptional()
    @IsNumber()
    presentCityCor
    @IsOptional()
    @IsString()
    presentWord
    @IsOptional()
    @IsString()
    presentWordNo
    @IsOptional()
    @IsString()
    presentVillRoad 
    @IsOptional()
    @IsString()
    presentBasHolding
    @IsOptional()
    @IsString()
    presentPostOffice
    @IsOptional()
    @IsString()
    presentPostOfficeCode
    @IsOptional()
    @IsString()
    perDivi
    @IsOptional()
    @IsNumber()
    pertDis
    @IsOptional()
    @IsNumber()
    pertPS
    @IsOptional()
    @IsNumber()
    perCityCor
    @IsOptional()
    @IsString()
    perWord
    @IsOptional()
    @IsString()
    perWordNo
    @IsOptional()
    @IsString()
    perVillRoad
    @IsOptional()
    @IsString()
    perBasHolding
    @IsOptional()
    @IsString()
    perPostOffice
    @IsOptional()
    @IsString()
    perPostOfficeCode
}