import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { EmployeeController } from 'src/hr/employee-info/employee-info.controller';
import { EmployeeModule } from 'src/hr/employee-info/employee-info.module';
import { EmployeeService } from 'src/hr/employee-info/employee-info.service';
import { LeaveController } from 'src/hr/leave/leave.controller';
import { LeaveModule } from 'src/hr/leave/leave.module';
import { LeaveService } from 'src/hr/leave/leave.service';
import { DepartmentController } from 'src/hr/setup/department/department.controller';
import { DepartmentModule } from 'src/hr/setup/department/department.module';
import { DepartmentService } from 'src/hr/setup/department/department.service';
import { DesignationController } from 'src/hr/setup/designation/designation.controller';
import { DesignationModule } from 'src/hr/setup/designation/designation.module';
import { DesignationService } from 'src/hr/setup/designation/designation.service';
import { ImageResizeService } from 'src/services/image-resize.service';
@Module({
  imports: [EmployeeModule, DepartmentModule, DesignationModule, LeaveModule],
  controllers: [EmployeeController, DepartmentController, DesignationController, LeaveController],
  providers: [EmployeeService, ImageResizeService, DepartmentService, DesignationService, LeaveService]
})

export class HrModule {}
