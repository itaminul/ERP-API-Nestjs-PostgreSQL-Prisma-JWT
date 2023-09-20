import { Module } from '@nestjs/common';
import { DivisionController } from './district.controller';
import { DistrictService } from './district.service';

@Module({
  providers: [DistrictService],
  controllers: [DivisionController]
})
export class DivisionModule {}
