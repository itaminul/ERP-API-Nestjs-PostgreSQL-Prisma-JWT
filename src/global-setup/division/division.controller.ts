import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { DivisionService } from './division.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { Users } from '@prisma/client';
import { CreateDivisionDto } from './dto/create-division.dto';
import { UpdateDivisionDto } from './dto/update-division.dto';

@Controller('divisition')
export class DivisionController {
  constructor(private readonly divisionService: DivisionService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll(@AuthUserInfo() authUserInfo: Users) {
    try {
      const results = await this.divisionService.getAll(authUserInfo);
      return {
        message: 'Show data successfully',
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/activeList')
  async getActiveAll() {
    try {
      const results = await this.divisionService.getActiveAll();
      return {
        message: 'Show data successfully',
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/byId/:id')
  async getById(@Param('id') id: number) {
    try {
      const results = await this.divisionService.getById(id);
      return {
        message: 'Show data successfully',
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() dto: CreateDivisionDto,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const results = await this.divisionService.create(dto, authUserInfo);
      return {
        message: 'Created Successfully',
        success: true,
        status: HttpStatus.CREATED,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateDivisionDto,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const results = await this.divisionService.update(id, dto, authUserInfo);
      return {
        message: 'Updated Successfully',
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
