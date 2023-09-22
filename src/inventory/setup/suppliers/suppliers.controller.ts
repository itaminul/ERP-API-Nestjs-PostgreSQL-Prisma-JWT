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
            const results = await this.invSupService.getAll(authUserInfo);
            return { message: "Show data successfully", success: true, status: HttpStatus.OK, results }
        } catch (error) {
            return { success: false, message: error.message }
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() createSupplierDto: CreateSupplierDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const results = await this.invSupService.create(createSupplierDto, authUserInfo);
            return { message: "Show data successfully", success: true, status: HttpStatus.CREATED, results }
        } catch (error) {
            return { success: false, message: error.message }
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateSupplierDto: UpdateSupplierDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const results = await this.invSupService.update(id, updateSupplierDto, authUserInfo);
            return { message: "Show data successfully", success: true, status: HttpStatus.OK, results }
        } catch (error) {
            return { success: false, message: error.message }
        }
    }
}
