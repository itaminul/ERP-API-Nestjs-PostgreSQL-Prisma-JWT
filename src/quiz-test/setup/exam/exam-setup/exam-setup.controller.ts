import { Body, Controller, HttpStatus } from '@nestjs/common';
import { ExamSetupService } from './exam-setup.service';
import { CreateExamSetupDto } from './dto/create-exam-setup.dto';

@Controller('exam-setup')
export class ExamSetupController {
    constructor(private readonly examService: ExamSetupService) {}
    async getAll() {
        try {
            const results = await this.examService.getAll()            
            return { message: 'Show Successfully', success: true, status: HttpStatus.OK, results }
        } catch (error) {
            return { success: false, message: error.message }
        }
    }
    async create(@Body() dto: CreateExamSetupDto) {
        try {
            const results = await this.examService.create(dto)            
            return { message: 'Insert Successfully', success: true, status: HttpStatus.OK, results }
        } catch (error) {
            return { success: false, message: error.message }
        }
    }
}
