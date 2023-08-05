import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { EmployeeController } from 'src/hr/employee-info/employee-info.controller';
import { EmployeeModule } from 'src/hr/employee-info/employee-info.module';
import { EmployeeService } from 'src/hr/employee-info/employee-info.service';
@Module({
  imports: [EmployeeModule],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})

export class HrModule {}
