import { Module } from '@nestjs/common';
import { RequisitionController } from './requisition.controller';
import { RequisitionService } from './requisition.service';

@Module({
  controllers: [RequisitionController],
  providers: [RequisitionService]
})
export class RequisitionModule {}
