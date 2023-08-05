import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateEmployeeDto } from './dto/create.employee.dto';
import { CreateEduInfoDto } from './dto/create.eduinfo.dto';
import { UpdateEmployeeDto } from './dto/update.employee.dto';

@Injectable()
export class EmployeeService {
    constructor(private readonly prisma: PrismaService) {}

    async getAll() {
        return await this.prisma.employeeInfo.findMany();
    }

    async createEmpInfo(@Body() body: CreateEmployeeDto,  authUserInfo, empPhoto) {      
        const empP = empPhoto.filename;
        //console.log("serveic body", empPhoto.filename)
        const {
            firstName,
            middleName,
            lastName,
            fullName,
            phone,
            mobileOne,
            mobileTwo,
            emergencyMobile,
            officeEmail,
            personalEmail,
           // empImage:empP,
            empSignature,
            nationalId,
            deptId,
            designationId,
            dateOfBirts,
            gender,
            religion,
            maritialStatus,
            spousName,
            spouseProfe,
            fatherOrHusbandName,
            fatherOrHusbandProfe,
            fatherOrHusbandMobile,
            motherName,
            motherProfe,
            motherMobile,
            presentDivi,
            presentDis,
            presentPS,
            presentCityCor,
            presentWord,
            presentWordNo,
            presentVillRoad,
            presentBasHolding,
            presentPostOffice,
            presentPostOfficeCode,
            perDivi,
            pertDis,
            pertPS,
            perCityCor,
            perWord,
            perWordNo,
            perVillRoad,
            perBasHolding,
            perPostOffice,
            perPostOfficeCode,
            empList
        } = body

        return await this.prisma.employeeInfo.create({            
            data: {
                firstName,
                middleName,
                lastName,
                fullName,
                phone,
                mobileOne,
                mobileTwo,
                emergencyMobile,
                officeEmail,
                personalEmail,
                empImage:empP,
                empSignature,
                nationalId,
                deptId,
                designationId,
                dateOfBirts,
                gender,
                religion,
                maritialStatus,
                spousName,
                spouseProfe,
                fatherOrHusbandName,
                fatherOrHusbandProfe,
                fatherOrHusbandMobile,
                motherName,
                motherProfe,
                motherMobile,
                presentDivi,
                presentDis,
                presentPS,
                presentCityCor,
                presentWord,
                presentWordNo,
                presentVillRoad,
                presentBasHolding,
                presentPostOffice,
                presentPostOfficeCode,
                perDivi,
                pertDis,
                pertPS,
                perCityCor,
                perWord,
                perWordNo,
                perVillRoad,
                perBasHolding,
                perPostOffice,
                perPostOfficeCode,
                createdDate: new Date().toLocaleDateString(),
                createdTime: new Date().toLocaleTimeString(),
                createdAt: new Date(),
                createdBy: authUserInfo.id,
                employeeEdu: { create: body.empList}
            }
        })
    }

    async updateEmpInfo(@Param('id') id: number, @Body() body: UpdateEmployeeDto, authUserInfo) {

        await this.prisma.employeeEdu.deleteMany({
            where: {
                empId: Number(id)
            }
        })
   
        const {
            firstName,
            middleName,
            lastName,
            fullName,
            phone,
            mobileOne,
            mobileTwo,
            emergencyMobile,
            officeEmail,
            personalEmail,
            empImage,
            empSignature,
            nationalId,
            deptId,
            designationId,
            dateOfBirts,
            gender,
            religion,
            maritialStatus,
            spousName,
            spouseProfe,
            fatherOrHusbandName,
            fatherOrHusbandProfe,
            fatherOrHusbandMobile,
            motherName,
            motherProfe,
            motherMobile,
            presentDivi,
            presentDis,
            presentPS,
            presentCityCor,
            presentWord,
            presentWordNo,
            presentVillRoad,
            presentBasHolding,
            presentPostOffice,
            presentPostOfficeCode,
            perDivi,
            pertDis,
            pertPS,
            perCityCor,
            perWord,
            perWordNo,
            perVillRoad,
            perBasHolding,
            perPostOffice,
            perPostOfficeCode,
            empList
        } = body

        /*await this.prisma.employeeEdu.deleteMany({
            where: {
                empId: Number(id)
            }
        })*/

        /*
        
         /*
                employeeEdu: {
                    updateMany: {
                      where: {
                        id: {}
                        // empId: Number(id),
                      },
                      data: {
                        degreeId: 1414,
                      },
                    },
                  },                 

                    employeeEdu: {
                        connectOrCreate: [
                        {
                            where: { id: Number(id) },
                            create: { degreeId: 355 },
                        },
                        {
                            where: { id: Number(id) },
                            create: { degreeId: 344 },
                        },
                        ],
                    },
  
  */
        const rawq = await this.prisma.$queryRaw`SELECT * FROM "EmployeeInfo"`;

        return await this.prisma.employeeInfo.update({            
            where: {
                id: Number(id)
            },
            data: {
                firstName,
                middleName,
                lastName,
                fullName,
                phone,
                mobileOne,
                mobileTwo,
                emergencyMobile,
                officeEmail,
                personalEmail,
                empImage,
                empSignature,
                nationalId,
                deptId,
                designationId,
                dateOfBirts,
                gender,
                religion,
                maritialStatus,
                spousName,
                spouseProfe,
                fatherOrHusbandName,
                fatherOrHusbandProfe,
                fatherOrHusbandMobile,
                motherName,
                motherProfe,
                motherMobile,
                presentDivi,
                presentDis,
                presentPS,
                presentCityCor,
                presentWord,
                presentWordNo,
                presentVillRoad,
                presentBasHolding,
                presentPostOffice,
                presentPostOfficeCode,
                perDivi,
                pertDis,
                pertPS,
                perCityCor,
                perWord,
                perWordNo,
                perVillRoad,
                perBasHolding,
                perPostOffice,
                perPostOfficeCode,
                updatedDate: new Date().toLocaleDateString(),
                updatedTime: new Date().toLocaleTimeString(),
                updatedAt: new Date(),
                updatedBy: authUserInfo.id,
                employeeEdu: { create:  body.empList}
            }
        })
    }
}
