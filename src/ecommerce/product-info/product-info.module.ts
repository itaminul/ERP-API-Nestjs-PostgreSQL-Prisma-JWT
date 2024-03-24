import { Module } from '@nestjs/common';
import { ProductInfoService } from './product-info.service';
import { ProductInfoController } from './product-info.controller';

@Module({
  providers: [ProductInfoService],
  controllers: [ProductInfoController]
})
export class ProductInfoModule {}
