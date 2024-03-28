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
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { Users } from '@prisma/client';
import { ThanaService } from './thana.service';
import { UpdateThanatDto } from './dto/update-thana.dto';
import { CreateThanaDto } from './dto/create-thana.dto';

@Controller('district')
export class ThanaController {
  constructor(private readonly thanaService: ThanaService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll(@AuthUserInfo() authUserInfo: Users) {
    try {
      const results = await this.thanaService.getAll(authUserInfo);
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
      const results = await this.thanaService.getActiveAll();
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
      const results = await this.thanaService.getById(id);
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
    @Body() dto: CreateThanaDto,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const results = await this.thanaService.create(dto, authUserInfo);
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
    @Body() dto: UpdateThanatDto,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const results = await this.thanaService.update(id, dto, authUserInfo);
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
