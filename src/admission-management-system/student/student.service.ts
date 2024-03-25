import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateStudentDto } from './dto/create.student.dto';
import { UpdateStudentDto } from './dto/update.student.dto';
import { IsDateString, isDateString } from 'class-validator';

@Injectable()
export class StudentService {
  constructor(readonly prisma: PrismaService) {}

  async getAll(authUserInfo) {
    return await this.prisma.studentInfo.findMany();
  }

  async create(authUserInfo, @Body() dto: CreateStudentDto) {
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
        orgId: authUserInfo.orgId,
        createdBy: authUserInfo.id,
        createdAt: new Date(),
        createdDate: new Date().toLocaleDateString(),
        createdTime: new Date().toLocaleTimeString()
      },
    });
  }

  async update(@Param('id') id: number, @Body() dto: UpdateStudentDto, authUserInfo) {
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
      activeStatus,
    } = dto;
    await this.prisma.studentInfo.update({
      where: {
        id: Number(id)
      },
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
        activeStatus,
        updatedBy: authUserInfo.id,
        updatedAt: new Date(),
        updatedDate: new Date().toLocaleDateString(),
        updatedTime: new Date().toLocaleTimeString()
      },
    });
  }
}
