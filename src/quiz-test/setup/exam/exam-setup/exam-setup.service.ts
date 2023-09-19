import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateExamSetupDto } from './dto/create-exam-setup.dto';

@Injectable()
export class ExamSetupService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll() {
       //return this.prisma.examSetup.getAll()
    }

    async create(@Body() dto: CreateExamSetupDto) {
        const { examName, examDescription } = dto
        /*return await this.prisma.examSetup.create({
            data: {
                examName,
                examDescription,
                createdDate: new Date().toLocaleDateString(),
                createdTime: new Date().toLocaleTimeString(),
                createdAt: new Date()
            }
        })*/
    }

    async update(@Param('id') id: number, @Body() dto: CreateExamSetupDto) {
        const { examName, examDescription } = dto
      /*  return await this.prisma.examSetup.update({
            where: {
                id: id
            },
            data: {
                examName,
                examDescription,
                updatedDate: new Date().toLocaleDateString(),
                updatedTime: new Date().toLocaleTimeString(),
                updatedAt: new Date()
            }
        })*/
    }
}
