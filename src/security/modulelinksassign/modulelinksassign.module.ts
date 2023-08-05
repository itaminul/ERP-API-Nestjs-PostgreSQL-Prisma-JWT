import { Module } from '@nestjs/common';
import { ModulelinksassignService } from './modulelinksassign.service';
import { ModulelinksassignController } from './modulelinksassign.controller';

@Module({
    providers: [ModulelinksassignService],
    controllers: [ModulelinksassignController]
})
export class ModulelinksassignModule {}
