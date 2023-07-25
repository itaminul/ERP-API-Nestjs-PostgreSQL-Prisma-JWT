import { Module } from '@nestjs/common';
import { EmployeeInfoController } from './hr/employee-info/employee-info.controller';
import { EmployeeInfoService } from './hr/employee-info/employee-info.service';
import { EmployeeInfoModule } from './hr/employee-info/employee-info.module';
import { AttendanceController } from './hr/attendance/attendance.controller';
import { AttendanceService } from './hr/attendance/attendance.service';
import { AttendanceModule } from './hr/attendance/attendance.module';
import { LeaveService } from './hr/leave/leave.service';
import { LeaveController } from './hr/leave/leave.controller';
import { LeaveModule } from './hr/leave/leave.module';
import { MovementController } from './hr/movement/movement.controller';
import { MovementService } from './hr/movement/movement.service';
import { MovementModule } from './hr/movement/movement.module';
import { ItemSetupController } from './inventory/item-setup/item-setup.controller';
import { ItemSetupService } from './inventory/item-setup/item-setup.service';
import { ItemSetupModule } from './inventory/item-setup/item-setup.module';
import { RequisitionModule } from './inventory/requisition/requisition.module';

@Module({
  imports: [EmployeeInfoModule, AttendanceModule, LeaveModule, MovementModule, ItemSetupModule, RequisitionModule],
  controllers: [EmployeeInfoController, AttendanceController, LeaveController, MovementController, ItemSetupController],
  providers: [EmployeeInfoService, AttendanceService, LeaveService, MovementService, ItemSetupService],
})
export class AppModule {}
