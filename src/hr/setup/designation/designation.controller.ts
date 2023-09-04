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
            const results = await this.designationService.getAll(authUserInfo)
            return { message: 'Show Successfully', success: true, status: HttpStatus.OK, results }
        } catch (error) {
            return { success: false, message: error.message }
        }

    }


    @UseGuards(AuthGuard('jwt'))
    @Get('/getById')
    async getById(@Param('id') id: number, @AuthUserInfo() authUserInfo: Users) {
        try {
            const results = await this.designationService.getById(id, authUserInfo)
            return { message: 'Show Successfully', success: true, status: HttpStatus.OK, results }
        } catch (error) {
            return { success: false, message: error.message }
        }

    }


    @UseGuards(AuthGuard('jwt'))
    @Get('active')
    async getAllActive() {
        try {
            const results = await this.designationService.getAllActive()
            return { message: 'Show Successfully', success: true, status: HttpStatus.OK, results }
        } catch (error) {
            return { success: false, message: error.message }
        }

    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() dto: CreateDesignatinDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const results = await this.designationService.create(dto, authUserInfo)
            return { message: 'Created Successfully', success: true, status: HttpStatus.CREATED, results }
        } catch (error) {
            return { success: false, message: error.message }
        }

    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async update(@Param('id') id: number, @Body() dto: UpdateDesignatinDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const results = await this.designationService.update(id, dto, authUserInfo)
            return { message: 'Updated Successfully', success: true, status: HttpStatus.OK, results }
        } catch (error) {
            return { success: false, message: error.message }
        }
    }
}
