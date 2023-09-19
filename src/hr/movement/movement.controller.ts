import { Body, Controller, Get, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';

import { Prisma, Users } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { CreateMovementDto } from './dto/create.movement.dto';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { UpdateMovementDto } from './dto/update.movement.dto';
import { MovementsService } from './movement.service';

@Controller('movements')
export class MovementsController {
    constructor(private readonly movementService: MovementsService) {}

    
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAll(@AuthUserInfo() authUserInfo: Users) {
        try {
            const results = await this.movementService.getAll(authUserInfo)
            return { message: "Show data successfully", success: true, status: HttpStatus.OK, results }
        } catch (error) {
            return { success: false, message: error.message }
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/getByid')
    async geById(@Param('id') id: number, authUserInfo: Users) {
        try {
            const results = await this.movementService.geById(id, authUserInfo)
            return { message: "Show data successfully", success: true, status: HttpStatus.OK, results }
        } catch (error) {
            return { success: false, message: error.message }
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() dto: CreateMovementDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const results = await this.movementService.create(dto, authUserInfo)
            return { message: "Creaded successfully", success: true, status: HttpStatus.CREATED, results }
        } catch (error) {
            return { success: false, message: error.message }
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async update(@Param('id') id: number, @Body() dto: UpdateMovementDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const results = await this.movementService.update(id, dto, authUserInfo)
            return { message: "Updated successfully", success: true, status: HttpStatus.OK, results }
        } catch (error) {
            return { success: false, message: error.message }
        }
    }
}
