import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateStudentDto } from './dto/create.student.dto';
import { UpdateStudentDto } from './dto/update.student.dto';

@Injectable()
export class StudentService {
  constructor(readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.studentInfo.findMany();
  }

  async create(@Body() dto: CreateStudentDto) {
    const {
      studentImage,
      studentSignature,
      firstName,
      lastName,
      middleName,
      maritialStatus,
      mobileOne,
      mobileTwo,
      motherMobile,
      motherName,
      motherProfe,
      emergencyMobile,
      fatherOrHusbandMobile,
      officeEmail,
      dateOfBirth,
      departmentId,
      bloodGroupId,
      spousName,
      genderId,
      religionId,
      fullName,
      phone,
      
    } = dto;
    await this.prisma.studentInfo.create({
      data: {
        studentImage,
      studentSignature,
      firstName,
      lastName,
      middleName,
      maritialStatus,
      mobileOne,
      mobileTwo,
      motherMobile,
      motherName,
      motherProfe,
      emergencyMobile,
      fatherOrHusbandMobile,
      officeEmail,
      dateOfBirth,
      departmentId,
      bloodGroupId,
      spousName,
      genderId,
      religionId,
      fullName,
      phone,
      },
    });
  }

  async update(@Param('id') id: number, @Body() dto: UpdateStudentDto) {
    const {
      studentImage,
      studentSignature,
      firstName,
      lastName,
      middleName,
      maritialStatus,
      mobileOne,
      mobileTwo,
      motherMobile,
      motherName,
      motherProfe,
      emergencyMobile,
      fatherOrHusbandMobile,
      officeEmail,
      dateOfBirth,
      departmentId,
      bloodGroupId,
      spousName,
      genderId,
      religionId,
      fullName,
      phone,
      activeStatus
      
    } = dto;
    await this.prisma.studentInfo.create({
      data: {
        studentImage,
      studentSignature,
      firstName,
      lastName,
      middleName,
      maritialStatus,
      mobileOne,
      mobileTwo,
      motherMobile,
      motherName,
      motherProfe,
      emergencyMobile,
      fatherOrHusbandMobile,
      officeEmail,
      dateOfBirth,
      departmentId,
      bloodGroupId,
      spousName,
      genderId,
      religionId,
      fullName,
      phone,
      activeStatus
      },
    });
  }
}
