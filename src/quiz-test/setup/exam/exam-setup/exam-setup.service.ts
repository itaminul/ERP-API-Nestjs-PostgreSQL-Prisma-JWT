import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateExamSetupDto } from './dto/create-exam-setup.dto';

@Injectable()
export class ExamSetupService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll() {
        retun this.prisma.examSetup.getAll()
    }

    async create(@Body() dto: CreateExamSetupDto) {
        const { examName, examDescription } = dto
        this.prisma.examSetup.create({
            data: {
                examName,
                examDescription,
                createdDate: new Date().toLocaleDateString(),
                createdTime: new Date().toLocaleTimeString(),
                createdAt: new Date()
            }
        })
    }
}
