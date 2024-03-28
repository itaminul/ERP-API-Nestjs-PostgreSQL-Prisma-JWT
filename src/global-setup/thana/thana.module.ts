import { Module } from '@nestjs/common';
import { ThanaService } from './thana.service';
import { ThanaController } from './thana.controller';

@Module({
  providers: [ThanaService],
  controllers: [ThanaController],
})
export class DivisionModule {}
