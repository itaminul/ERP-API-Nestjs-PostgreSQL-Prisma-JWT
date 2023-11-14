import { Module } from '@nestjs/common';
import { ModulesService } from './modules.service';

@Module({
  providers: [ModulesService],
})
export class ModulesModule {}
