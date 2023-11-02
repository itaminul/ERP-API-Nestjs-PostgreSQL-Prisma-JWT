import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AttendanceController } from 'src/hr/attendance/attendance.controller';
import { AttendanceModule } from 'src/hr/attendance/attendance.module';
import { AttendanceService } from 'src/hr/attendance/attendance.service';
// import { EmployeeController } from 'src/hr/employee-info_back/employee.controller';
// import { EmployeeModule } from 'src/hr/employee-info_back/employee.module';
// import { EmployeeService } from 'src/hr/employee-info_back/employee.service';
import { LeaveController } from 'src/hr/leave/leave.controller';
import { LeaveModule } from 'src/hr/leave/leave.module';
import { LeaveService } from 'src/hr/leave/leave.service';
import { MovementsController } from 'src/hr/movements/movements.controller';
import { MovementsModule } from 'src/hr/movements/movements.module';
import { MovementsService } from 'src/hr/movements/movements.service';
import { BloodGroupsController } from 'src/hr/setup/blood-groups/blood-groups.controller';
import { BloodGroupsModule } from 'src/hr/setup/blood-groups/blood-groups.module';
import { BloodGroupsService } from 'src/hr/setup/blood-groups/blood-groups.service';
import { DepartmentController } from 'src/hr/setup/department/department.controller';
import { DepartmentModule } from 'src/hr/setup/department/department.module';
import { DepartmentService } from 'src/hr/setup/department/department.service';
import { DesignationController } from 'src/hr/setup/designation/designation.controller';
import { DesignationModule } from 'src/hr/setup/designation/designation.module';
import { DesignationService } from 'src/hr/setup/designation/designation.service';
import { ReligionsController } from 'src/hr/setup/religions/religions.controller';
import { ReligionsModule } from 'src/hr/setup/religions/religions.module';
import { ReligionsService } from 'src/hr/setup/religions/religions.service';
import { ImageResizeService } from 'src/services/image-resize.service';

@Module({
  imports: [
    DepartmentModule,
    DesignationModule,
    LeaveModule,
    AttendanceModule,
    MovementsModule,
    ReligionsModule,
    BloodGroupsModule,
  ],
  // controllers: [EmployeeController, DepartmentController, DesignationController, LeaveController, AttendanceController, MovementsController, ReligionsController, BloodGroupsController],
  controllers: [
    DepartmentController,
    DesignationController,
    LeaveController,
    AttendanceController,
    MovementsController,
    ReligionsController,
    BloodGroupsController,
  ],
  providers: [
    ImageResizeService,
    DepartmentService,
    DesignationService,
    LeaveService,
    AttendanceService,
    MovementsService,
    ReligionsService,
    BloodGroupsService,
  ],
})
export class HrModule {}
