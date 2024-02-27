import { Module } from '@nestjs/common';
import { ReligionsController } from './religions.controller';
import { ReligionsService } from './religions.service';

@Module({
  controllers: [ReligionsController],
  providers: [ReligionsService],
})
export class ReligionsModule {}
