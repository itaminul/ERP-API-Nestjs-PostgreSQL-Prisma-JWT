import { Module } from '@nestjs/common';
import { ModulelinksService } from './modulelinks.service'
import { ModulelinksController } from './modulelinks.controller'
@Module({
    controllers: [ModulelinksController],
    providers: [ModulelinksService],
    
})
export class ModulelinksModule {}
