import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { Users } from '@prisma/client';
import { CreateItemDto } from './dto/create.items.dto';
import { UpdateItemDto } from './dto/update.items.dto';

@Controller('inventory-item-setup')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll(
    @Query('page') page: number,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const results = await this.itemService.getAll(page, authUserInfo);
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
    @Body() dto: CreateItemDto,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const results = await this.itemService.create(dto, authUserInfo);
      return {
        message: 'Show Successfully',
        success: true,
        status: HttpStatus.CREATED,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('/:id')
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateItemDto,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const results = await this.itemService.update(id, dto, authUserInfo);
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
}
