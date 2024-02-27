import { Module } from '@nestjs/common';
import { MovementsController } from './movement.controller';
import { MovementsService } from './movement.service';

@Module({
  controllers: [MovementsController],
  providers: [MovementsService],
})
export class MovementsModule {}
