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

import { Users } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create.organization.dto';
import { UpdateOrganizationDto } from './dto/update.organization.dto';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll() {
    try {
      const results = await this.organizationService.getAll();
      return {
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
      const results = await this.organizationService.getActiveAll();
      return {
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
      const results = await this.organizationService.getById(id);
      return {
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
    @Body() dto: CreateOrganizationDto,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const results = await this.organizationService.create(dto, authUserInfo);
      return {
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
    @Body() dto: UpdateOrganizationDto,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const results = await this.organizationService.update(
        id,
        dto,
        authUserInfo,
      );
      return {
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
