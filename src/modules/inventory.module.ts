import { Module } from '@nestjs/common';
import { RequisitionController } from 'src/inventory/requisition/requisition.controller';
import { RequisitionModule } from 'src/inventory/requisition/requisition.module';
import { RequisitionService } from 'src/inventory/requisition/requisition.service';
import { SuppliersController } from 'src/inventory/setup/suppliers/suppliers.controller';
import { SuppliersService } from 'src/inventory/setup/suppliers/suppliers.service';

@Module({
  controllers: [RequisitionController, SuppliersController],
  providers: [RequisitionService, SuppliersService],
})
export class InventoryModule {}
