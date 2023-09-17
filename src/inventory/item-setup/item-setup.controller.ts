import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ItemSetupService } from './item-setup.service';
import { Prisma, Users } from '@prisma/client';
import { CreateInvItem } from './dto/create.inv.item.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { UpdateInvItem } from './dto/update.inv.item.dto';

@Controller('item-setup')
export class ItemSetupController {
    constructor(private readonly itemSetupService: ItemSetupService) { }
    

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAll(@Query('page') page: number ,@AuthUserInfo() authUserInfo: Users) {
        try {
            const results = await this.itemSetupService.getAll(page,authUserInfo)
            return { message: 'Show Successfully', success: true, status: HttpStatus.OK, results }
        } catch (error) {
            return { success: false, message: error.message }
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() dto: CreateInvItem, @AuthUserInfo() authUserInfo: Users) {
        try {
            const results = await this.itemSetupService.create(dto, authUserInfo)
            return { message: 'Show Successfully', success: true, status: HttpStatus.CREATED, results }
        } catch (error) {
            return { success: false, message: error.message }
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch('/:id')
    async update(@Param('id') id: number, @Body() dto: UpdateInvItem, @AuthUserInfo() authUserInfo: Users) {
        try {
            const results = await this.itemSetupService.update(id, dto, authUserInfo)
            return { message: 'Show Successfully', success: true, status: HttpStatus.OK, results }
        } catch (error) {
            return { success: false, message: error.message }
        }
    }
    
}
