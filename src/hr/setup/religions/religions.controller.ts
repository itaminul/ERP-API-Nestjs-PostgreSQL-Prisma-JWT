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
import { ReligionsService } from './religions.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { Users } from '@prisma/client';
import { CreateReligionDto } from './dto/create-religion.dto';
import { UpdateReligionDto } from './dto/update-religion.dto';

@Controller('religions')
export class ReligionsController {
  constructor(private readonly religionService: ReligionsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll(@AuthUserInfo() authUserInfo: Users) {
    try {
      const results = await this.religionService.getAll(authUserInfo);
      console.log('result');
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
  @Get('/getById')
  async getById(@Param('id') id: number, @AuthUserInfo() authUserInfo: Users) {
    try {
      const results = await this.religionService.getById(id, authUserInfo);
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
      const results = await this.religionService.getAllActive();
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
    @Body() dto: CreateReligionDto,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const results = await this.religionService.create(dto, authUserInfo);
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
    @Body() dto: UpdateReligionDto,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const results = await this.religionService.update(id, dto, authUserInfo);
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
