import { Module } from '@nestjs/common';
import { ItemSupplierController } from './item-supplier.controller';
import { ItemSupplierService } from './item-supplier.service';

@Module({
  controllers: [ItemSupplierController],
  providers: [ItemSupplierService]
})
export class ItemSupplierModule {}
