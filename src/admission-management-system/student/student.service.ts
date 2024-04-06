import { Body, Inject, Injectable, Param } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateStudentDto } from './dto/create.student.dto';
import { UpdateStudentDto } from './dto/update.student.dto';

@Injectable()
export class StudentService {
  constructor(
    @Inject('CACHE_MANAGER') private cacheManager: Cache,
    readonly prisma: PrismaService,
  ) {}

  async getAll(authUserInfo) {
    let studentInfos = await this.prisma.studentInfo.findMany();
    if (studentInfos && studentInfos.length > 0) {
      await this.cacheManager.set('studentInfos', studentInfos);
      return await this.cacheManager.get('studentInfos');
    } else {
      throw new Error('No designations found or designations are undefined.');
    }
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
        createdTime: new Date().toLocaleTimeString(),
      },
    });
  }

  async update(
    @Param('id') id: number,
    @Body() dto: UpdateStudentDto,
    authUserInfo,
  ) {
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
        id: Number(id),
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
        updatedTime: new Date().toLocaleTimeString(),
      },
    });
  }
}
