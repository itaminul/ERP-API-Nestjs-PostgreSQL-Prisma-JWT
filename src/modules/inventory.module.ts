import { Module } from "@nestjs/common";
import { RequisitionController } from "src/inventory/requisition/requisition.controller";
import { RequisitionModule } from "src/inventory/requisition/requisition.module";
import { RequisitionService } from "src/inventory/requisition/requisition.service";

@Module({
controllers: [RequisitionController],
providers: [RequisitionService]
})

export class InventoryModule {}