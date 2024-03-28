import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictController } from './district.controller';

@Module({
  providers: [DistrictService],
  controllers: [DistrictController],
})
export class DistrictModule {}
