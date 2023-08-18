import { Body, Controller, Get, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
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
    async getAll(@AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.itemSetupService.getAll(authUserInfo);
            return { message: "Show successfully", status: HttpStatus.OK, response };
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() dto: CreateInvItem, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.itemSetupService.create(dto, authUserInfo);
            return { message: "Created successfully", status: HttpStatus.OK, response };
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error
        }

    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async update(@Param('id') id: number, @Body() dto: UpdateInvItem, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.itemSetupService.update(id, dto, authUserInfo);
            return { message: "Updated successfully", status: HttpStatus.OK, response };
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error

        }
    }
}
