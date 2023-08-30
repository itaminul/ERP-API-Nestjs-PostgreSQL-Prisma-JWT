import { Body, Controller, Get, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ItemsService } from './items.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { Prisma, Users } from '@prisma/client';
import { CreateItemDto } from './dto/create.items.dto';
import { UpdateItemDto } from './dto/update.items.dto';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemsService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAll(@AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.itemService.getAll(authUserInfo)
            return { message: 'Show Successfully', status: HttpStatus.OK, response }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() dto: CreateItemDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.itemService.create(dto,authUserInfo)
            return { message: 'Show Successfully', status: HttpStatus.OK, response }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch('/:id')
    async update(@Param('id') id: number, @Body() dto: UpdateItemDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.itemService.update(id,dto,authUserInfo)
            return { message: 'Show Successfully', status: HttpStatus.OK, response }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error
        }
    }
}
