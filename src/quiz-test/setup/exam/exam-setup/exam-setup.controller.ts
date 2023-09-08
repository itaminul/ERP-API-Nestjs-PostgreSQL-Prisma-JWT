import { Controller, HttpStatus } from '@nestjs/common';
import { ExamSetupService } from './exam-setup.service';

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
}
