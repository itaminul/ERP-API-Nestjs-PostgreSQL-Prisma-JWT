import { Body, Controller, Get, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { EmployeeTypeService } from './employee-type.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { Users } from '@prisma/client';
import { CreateEmployeeTypeDto } from './dto/create-emp-type.dto';
import { UpdateEmployeeTypeDto } from './dto/update-emp-type.dto';

@Controller('employee-type')
export class EmployeeTypeController {
    constructor(private readonly employeeTypeService: EmployeeTypeService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAll(@AuthUserInfo() authUserInfo: Users) {
        try {
            const results = await this.employeeTypeService.getAll(authUserInfo)
            return { message: 'Show Successfully', success: true, status: HttpStatus.OK, results }
        } catch (error) {
            return { success: false, message: error.message }
        }

    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/getById')
    async getById(@Param('id') id: number, @AuthUserInfo() authUserInfo: Users) {
        try {
            const results = await this.employeeTypeService.getById(id, authUserInfo)
            return { message: 'Show Successfully', success: true, status: HttpStatus.OK, results }
        } catch (error) {
            return { success: false, message: error.message }
        }

    }

    @UseGuards(AuthGuard('jwt'))
    @Get('active')
    async getAllActive() {
        try {
            const results = await this.employeeTypeService.getAllActive()
            return { message: 'Show Successfully', success: true, status: HttpStatus.OK, results }
        } catch (error) {
            return { success: false, message: error.message }
        }

    }
    
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() dto: CreateEmployeeTypeDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const results = await this.employeeTypeService.create(dto, authUserInfo)
            return { message: 'Created Successfully', success: true, status: HttpStatus.CREATED, results }
        } catch (error) {
            return { success: false, message: error.message }
        }

    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async update(@Param('id') id: number, @Body() dto: UpdateEmployeeTypeDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const results = await this.employeeTypeService.update(id, dto, authUserInfo)
            return { message: 'Updated Successfully', success: true, status: HttpStatus.OK, results }
        } catch (error) {
            return { success: false, message: error.message }
        }
    }
}
