import { Controller, Get } from '@nestjs/common';

@Controller('item-setup')
export class ItemSetupController {
    @Get()
    async getAll() {
        return 'get all';
    }
}
