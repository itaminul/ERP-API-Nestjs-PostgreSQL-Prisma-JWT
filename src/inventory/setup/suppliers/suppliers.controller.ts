import { Body, Controller, Get, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { Prisma, Users } from '@prisma/client';
import { CreateSupplierDto } from './dto/create.supplier.dto';
import { UpdateSupplierDto } from './dto/update.supplier.dto';

@Controller('suppliers')
export class SuppliersController {
    constructor(private readonly invSupService: SuppliersService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAll(@AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.invSupService.getAll(authUserInfo);
            return { message: 'Show Successfully', status: HttpStatus.OK, response }

        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() createSupplierDto: CreateSupplierDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.invSupService.create(createSupplierDto, authUserInfo);
            return { message: 'Show Successfully', status: HttpStatus.OK, response }

        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateSupplierDto: UpdateSupplierDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.invSupService.update(id, updateSupplierDto, authUserInfo);
            return { message: 'Show Successfully', status: HttpStatus.OK, response }

        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }
}
