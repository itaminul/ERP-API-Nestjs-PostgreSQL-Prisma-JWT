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
import { RequisitionService } from './requisition.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { Prisma, Users } from '@prisma/client';
import { CreateRequisitionDto } from './dto/create-requisition.dto';
import { UpdateRequisitionDto } from './dto/update-requisition.dto';

@Controller('requisition')
export class RequisitionController {
  constructor(private readonly requisitionService: RequisitionService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll(@AuthUserInfo() authUserInfo: Users) {
    try {
      const results = await this.requisitionService.getAll(authUserInfo);
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
  async create(@Body() dto: any, @AuthUserInfo() authUserInfo: Users) {
    try {
      const results = await this.requisitionService.create(dto, authUserInfo);
      return {
        message: 'Created data successfully',
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
    @Body() dto: any,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const results = await this.requisitionService.update(
        id,
        dto,
        authUserInfo,
      );
      return {
        message: 'Updated data successfully',
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
