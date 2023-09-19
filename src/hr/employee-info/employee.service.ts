import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateEmployeeDto } from './dto/create.employee.dto';
import { CreateEduInfoDto } from './dto/create.eduinfo.dto';
import { UpdateEmployeeDto } from './dto/update.employee.dto';

@Injectable()
export class EmployeeService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll() {
        const query = await this.prisma.employeeInfo.findMany({
            include: {
                employeeEdu: true,
                department: {
                    select: {
                        departmentName: true,
                        departmentDes: true
                    }
                },
                designation: {
                    select: {
                        designationName: true,
                        designationDes: true
                    }
                }
            }
        });

        const result = [];
        for (let value of query) {
            const showRes =

            {
                id: value.id,
                firstName: value.firstName,
                middleName: value.middleName,
                createDate: `${new Date(value.createdDate).getDate()} ${new Date(value.createdDate).getUTCMonth()} ${new Date(value.createdDate).getFullYear()}`,
                employeeEdu: value.employeeEdu,
                department: value.department

            }

           // console.log("value", value)

            result.push(showRes)
        }
        //console.log(result);
        return query;

    }


    async getEmployeeByDateWise(fDate, tDate) {
        return await this.prisma.employeeInfo.findMany({
            where: {
                createdAt: {
                    gte: `${fDate}`,
                    lte: `${tDate}`
                }
            },
            include: {
                employeeEdu: true,
                department: {
                    select: {
                        departmentName: true,
                        departmentDes: true
                    }
                },
                designation: {
                    select: {
                        designationName: true,
                        designationDes: true
                    }
                }
            }
        });
    }

    async getById(@Param('id') id: number) {
        return await this.prisma.employeeInfo.findMany({
            where: {
                id: Number(id)
            },
            include: {
                employeeEdu: true,
                department: {
                    select: {
                        departmentName: true,
                        departmentDes: true
                    }
                },
                designation: {
                    select: {
                        designationName: true,
                        designationDes: true
                    }
                }
            }
        });
    }

    async getAllActive() {
        return await this.prisma.employeeInfo.findMany({
            where: {
                activeStatus: true
            },
            include: {
                employeeEdu: true,
                department: {
                    select: {
                        departmentName: true,
                        departmentDes: true
                    }

                },
                designation: {
                    select: {
                        designationName: true,
                        designationDes: true
                    }
                }
            }
        });
    }

    async createEmpInfo(@Body() body: CreateEmployeeDto, authUserInfo, empPhoto) {
        const empP = empPhoto;
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
            departmentId,
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
            presentDiviId,
            presentDistId,
            presentPSId,
            presentCityCor,
            presentWord,
            presentWordNo,
            presentVillRoad,
            presentBasHolding,
            presentPostOffice,
            presentPostOfficeCode,
            perDiviId,
            pertDisId,
            pertPSId,
            perCityCor,
            perWord,
            perWordNo,
            perVillRoad,
            perBasHolding,
            perPostOffice,
            perPostOfficeCode,
            empList
        } = body

        //console.log("ppp", body.presentDiviId)
        
        
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
                empImage: empP,
                empSignature,
                nationalId,
                departmentId: Number(departmentId),
                designationId: Number(designationId),
                dateOfBirts,
                genderId: Number(gender),
                religionId: Number(religion),
                maritialStatus,
                spousName,
                spouseProfe,
                fatherOrHusbandName,
                fatherOrHusbandProfe,
                fatherOrHusbandMobile,
                motherName,
                motherProfe,
                motherMobile,
                presentDiviId: Number(presentDiviId),
                presentDistId,
                presentPSId,
                presentCityCor,
                presentWord,
                presentWordNo,
                presentVillRoad,
                presentBasHolding,
                presentPostOffice,
                presentPostOfficeCode,
                perDiviId,
                pertDisId,
                pertPSId,
                perCityCor,
                perWord,
                perWordNo,
                perVillRoad,
                perBasHolding,
                perPostOffice,
                perPostOfficeCode,
                createdDate: new Date().toLocaleDateString(),
                createdTime: new Date().toLocaleTimeString(),
                createdAt: new Date().toISOString(),
                createdBy: authUserInfo.id,
                employeeEdu: { create: body.empList }
            }
        })
    }


    async updateEmpInfo(@Param('id') id: number, @Body() body: UpdateEmployeeDto, authUserInfo, empPhoto) {

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
            departmentId,
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
            presentDiviId,
            presentDistId,
            presentPSId,
            presentCityCor,
            presentWord,
            presentWordNo,
            presentVillRoad,
            presentBasHolding,
            presentPostOffice,
            presentPostOfficeCode,
            perDiviId,
            pertDisId,
            pertPSId,
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
        // const rawq = await this.prisma.$queryRaw`SELECT * FROM "EmployeeInfo"`;

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
                empImage: empPhoto,
                empSignature,
                nationalId,
               // departmentId,
                //designationId,
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
               // presentDiviId,
              //  presentDistId,
              //  presentPSId,
                presentCityCor,
                presentWord,
                presentWordNo,
                presentVillRoad,
                presentBasHolding,
                presentPostOffice,
                presentPostOfficeCode,
                perDiviId,
                pertDisId,
                pertPSId,
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
                employeeEdu: { create: body.empList }
            }
        })
    }
}
