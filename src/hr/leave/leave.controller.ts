import { Controller, HttpStatus, UseGuards, Body, Get, Post, Patch, Param } from '@nestjs/common';
import { LeaveService } from './leave.service'
import { Prisma, Users } from '@prisma/client'
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { CreateLeaveDto } from './dto/create.leave.dto'
import { AuthGuard } from '@nestjs/passport';
import { UpdateLeaveDto } from './dto/update.leave.dot';
@Controller('leave')
export class LeaveController {
    constructor(private readonly leaveService: LeaveService) {}
    
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAll() {
        try {
            const response = await this.leaveService.getAll()
            return { message: "Show Successfully", status: HttpStatus.OK, response}
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/getById')
    async getById(@Param('id') id: number) {
        try {
            const response = await this.leaveService.getById(id)
            return { message: "Show Successfully", status: HttpStatus.OK, response}
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() dto: CreateLeaveDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.leaveService.create(dto, authUserInfo)
            return { message: "Created Successfully", status: HttpStatus.OK, response}
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch()
    async update(@Body() dto: UpdateLeaveDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.leaveService.update(dto, authUserInfo)
            return { message: "Updated Successfully", status: HttpStatus.OK, response}
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }
}
