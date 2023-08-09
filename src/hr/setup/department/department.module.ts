import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';

@Module({
  providers: [DepartmentService]
})
export class DepartmentModule {}
