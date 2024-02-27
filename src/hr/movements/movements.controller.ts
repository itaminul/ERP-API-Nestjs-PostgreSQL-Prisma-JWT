import { Body, Controller, Get, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { MovementsService } from './movements.service';
import { Prisma, Users } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { CreateMovementDto } from './dto/create.movement.dto';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { UpdateMovementDto } from './dto/update.movement.dto';

@Controller('movements')
export class MovementsController {
    constructor(private readonly movementService: MovementsService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAll() {
        try {
            const response = await this.movementService.getAll()
            return { message: "Show Successfully", status: HttpStatus.OK, response}
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/getByid')
    async geById(@Param('id') id: number) {
        try {
            const response = await this.movementService.geById(id)
            return { message: "Show Successfully", status: HttpStatus.OK, response}
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async create(@Body() dto: CreateMovementDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.movementService.create(dto, authUserInfo)
            return { message: "Show Successfully", status: HttpStatus.OK, response}
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async update(@Param('id') id: number, @Body() dto: UpdateMovementDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.movementService.update(id, dto, authUserInfo)
            return { message: "Show Successfully", status: HttpStatus.OK, response}
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }
}
