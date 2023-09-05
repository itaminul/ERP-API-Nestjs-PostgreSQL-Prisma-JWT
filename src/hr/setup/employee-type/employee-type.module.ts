import { Module } from '@nestjs/common';
import { EmployeeTypeController } from './employee-type.controller';
import { EmployeeTypeService } from './employee-type.service';

@Module({
  controllers: [EmployeeTypeController],
  providers: [EmployeeTypeService]
})
export class EmployeeTypeModule {}
