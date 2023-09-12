import { Module } from '@nestjs/common';
import { RequisitionService } from './requisition.service';
import { RequisitionController } from './requisition.controller';

@Module({
  providers: [RequisitionService],
  controllers: [RequisitionController]
})
export class RequisitionModule {}
