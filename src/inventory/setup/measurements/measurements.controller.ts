import { Body, Controller, Get, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Prisma, Users } from '@prisma/client';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { MeasurementsService } from './measurements.service';
import { CreateMeasurementsDto } from './dto/create.measurements.dto';
import { UpdateMeasurementsDto } from './dto/update.measurements.dto';

@Controller('measurements')
export class MeasurementsController {
    constructor(private readonly measurementService: MeasurementsService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAll(@AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.measurementService.getAll(authUserInfo)
            return { message: "Show Successfully", status: HttpStatus.OK, response }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() dto: CreateMeasurementsDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.measurementService.create(dto, authUserInfo)
            return { message: "Created Successfully", status: HttpStatus.OK, response }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch()
    async update(@Param('id') id: number, @Body() dto: UpdateMeasurementsDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.measurementService.update(id, dto, authUserInfo)
            return { message: "Updated Successfully", status: HttpStatus.OK, response }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }
}


