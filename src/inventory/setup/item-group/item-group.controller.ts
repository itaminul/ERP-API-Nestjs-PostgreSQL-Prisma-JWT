import {
  Controller,
  Get,
  UseGuards,
  Post,
  Patch,
  HttpStatus,
  Param,
  Body,
} from '@nestjs/common';
import { ItemGroupService } from './item-group.service';
import { AuthGuard } from '@nestjs/passport';
import { Prisma, Users } from '@prisma/client';
import { CreateItemGroup } from './dto/create.item.group.dto';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { UpdateItemGroup } from './dto/update.item.group.dto';

@Controller('item-group')
export class ItemGroupController {
  constructor(private readonly itemGroupService: ItemGroupService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll(@AuthUserInfo() authUserInfo: Users) {
    try {
      const response = await this.itemGroupService.getAll(authUserInfo);
      return { message: 'Show Successfully', status: HttpStatus.OK, response };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
      }
      throw error;
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() dto: CreateItemGroup,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const response = await this.itemGroupService.create(dto, authUserInfo);
      return {
        message: 'Created Successfully',
        status: HttpStatus.OK,
        response,
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
      }
      throw error;
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch()
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateItemGroup,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const response = await this.itemGroupService.update(
        id,
        dto,
        authUserInfo,
      );
      return {
        message: 'Updated Successfully',
        status: HttpStatus.OK,
        response,
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
      }
      throw error;
    }
  }
}
