import { Module } from '@nestjs/common';
import { ItemGroupController } from './item-group.controller';
import { ItemGroupService } from './item-group.service';

@Module({
  providers: [ItemGroupService],
  controllers: [ItemGroupController],
})
export class ItemGroupModule { }
