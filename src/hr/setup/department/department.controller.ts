import { Body, Controller, Get, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { Prisma, Users } from '@prisma/client';
import { CreateDepartmentDto } from './dto/create.department.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { UpdateDepartmentDto } from './dto/update.department.dto';

@Controller('department')
export class DepartmentController {
    constructor(private readonly departmentService: DepartmentService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAll(@AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.departmentService.getAll(authUserInfo)
            return { message: "Show data successfully", status: HttpStatus.OK, response}
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/activeList')
    async getActiveAll() {
        try {
            const response = await this.departmentService.getActiveAll()
            return { message: "Show data successfully", status: HttpStatus.OK, response}
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/byId/:id')
    async getById(@Param('id') id: number) {
        try {
            const response = await this.departmentService.getById(id)
            return { message: "Show data successfully", status: HttpStatus.OK, response}
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() dto: CreateDepartmentDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.departmentService.create(dto, authUserInfo)
            return { message: "Created Successfully", status: HttpStatus.OK, response}
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async update(@Param('id') id: number, @Body() dto: UpdateDepartmentDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.departmentService.update(id, dto, authUserInfo)
            return { message: "Updated Successfully", status: HttpStatus.OK, response }
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }

    }
}
