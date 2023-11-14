import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
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
      const results = await this.departmentService.getAll(authUserInfo);
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
      const results = await this.departmentService.getActiveAll();
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
      const results = await this.departmentService.getById(id);
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
    @Body() dto: CreateDepartmentDto,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const results = await this.departmentService.create(dto, authUserInfo);
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
    @Body() dto: UpdateDepartmentDto,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const results = await this.departmentService.update(
        id,
        dto,
        authUserInfo,
      );
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
