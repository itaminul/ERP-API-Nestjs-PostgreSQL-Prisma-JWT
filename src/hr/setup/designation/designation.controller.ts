import { Body, Controller, Get, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { DesignationService } from './designation.service';
import { Prisma, Users } from '@prisma/client';
import { CreateDesignatinDto } from './dto/create.designation.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { UpdateDesignatinDto } from './dto/update.designation.dto';

@Controller('designation')
export class DesignationController {
    constructor(private readonly designationService: DesignationService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAll(@AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.designationService.getAll(authUserInfo)
            return { message: "Show Successfully", status: HttpStatus.OK, response }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }

    }


    @UseGuards(AuthGuard('jwt'))
    @Get('/getById')
    async getById(@Param('id') id: number, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.designationService.getById(id, authUserInfo)
            return { message: "Show Successfully", status: HttpStatus.OK, response }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }

    }


    @UseGuards(AuthGuard('jwt'))
    @Get('active')
    async getAllActive() {
        try {
            const response = await this.designationService.getAllActive()
            return { message: "Show Successfully", status: HttpStatus.OK, response }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }

    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() dto: CreateDesignatinDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.designationService.create(dto, authUserInfo)
            return { message: "Created Successfully", status: HttpStatus.OK, response }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }

    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async update(@Param('id') id: number, @Body() dto: UpdateDesignatinDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.designationService.update(id, dto, authUserInfo)
            return { message: "Created Successfully", status: HttpStatus.OK, response }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }
}
