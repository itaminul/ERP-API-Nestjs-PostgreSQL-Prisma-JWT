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
import { BloodGroupsService } from './blood-groups.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { Users } from '@prisma/client';
import { CreateBloodGroupsDto } from './dto/create-blood-groups.dto';
import { UpdateBloodGroupsDto } from './dto/update-blood-groups.dto';

@Controller('blood-groups')
export class BloodGroupsController {
  constructor(private readonly bloodGroupService: BloodGroupsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll(@AuthUserInfo() authUserInfo: Users) {
    try {
      const results = await this.bloodGroupService.getAll(authUserInfo);
      return {
        message: 'Show Successfully',
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/getById/:id')
  async getById(@Param('id') id: number, @AuthUserInfo() authUserInfo: Users) {
    try {
      const results = await this.bloodGroupService.getById(id, authUserInfo);
      return {
        message: 'Show Successfully',
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('active')
  async getAllActive() {
    try {
      const results = await this.bloodGroupService.getAllActive();
      return {
        message: 'Show Successfully',
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
    @Body() dto: CreateBloodGroupsDto,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const results = await this.bloodGroupService.create(dto, authUserInfo);
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
    @Body() dto: UpdateBloodGroupsDto,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const results = await this.bloodGroupService.update(
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
