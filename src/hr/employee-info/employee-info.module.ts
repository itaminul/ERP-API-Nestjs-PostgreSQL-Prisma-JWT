import { Module } from '@nestjs/common';
import { EmployeeService } from './employee-info.service';
import { EmployeeController } from './employee-info.controller';

@Module({
  providers: [EmployeeService]
})
export class EmployeeModule {}
