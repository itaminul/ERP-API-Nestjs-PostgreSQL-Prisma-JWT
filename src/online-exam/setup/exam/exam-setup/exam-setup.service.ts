import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateExamSetupDto } from './dto/create-exam-setup.dto';
import { UpdateExamSetupDto } from './dto/update-exam-setup.dto';

@Injectable()
export class ExamSetupService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(authUserInfo) {
    return this.prisma.examSetup.findMany({
      where: {
        orgId: authUserInfo.orgId
      }
    });
  }

  async create(@Body() dto: CreateExamSetupDto, authUserInfo) {
    const { examName, examDescription, examType,examStartDate,examEndDate,examStartTime,examEndTime } = dto;
    return await this.prisma.examSetup.create({
            data: {
                examName,
                examDescription,
                examType,
                examStartDate,
                examEndDate,
                examStartTime,
                examEndTime,
                orgId: authUserInfo.orgId,
                createdDate: new Date().toLocaleDateString(),
                createdTime: new Date().toLocaleTimeString(),
                createdAt: new Date()
            }
        })
  }

  async update(@Param('id') id: number, @Body() dto: UpdateExamSetupDto, userInfo) {
    const { examName, examDescription, examType,examStartDate,examEndDate,examStartTime,examEndTime } = dto;
      return await this.prisma.examSetup.update({
            where: {
                id: id
            },
            data: {
                examName,
                examDescription,
                examType,
                examStartDate,
                examEndDate,
                examStartTime,
                examEndTime,
                orgId: userInfo.orgId,
                updatedDate: new Date().toLocaleDateString(),
                updatedTime: new Date().toLocaleTimeString(),
                updatedAt: new Date()
            }
        })
  }
}
