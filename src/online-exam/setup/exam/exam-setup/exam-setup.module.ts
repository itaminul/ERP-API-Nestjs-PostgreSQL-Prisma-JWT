import { Module } from '@nestjs/common';
import { ExamSetupController } from './exam-setup.controller';
import { ExamSetupService } from './exam-setup.service';

@Module({
  controllers: [ExamSetupController],
  providers: [ExamSetupService],
})
export class ExamSetupModule {}
