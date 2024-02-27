import {
  Get,
  Post,
  Body,
  Controller,
  HttpStatus,
  BadRequestException,
  UseGuards,
  Patch,
  Param,
} from '@nestjs/common';
import { ModulelinksService } from './modulelinks.service';
import { CreateModuleLinkDto } from './dto/create.moduellink.dto';
import { Prisma, Users } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { UpdateModuleLinkDto } from './dto/update.modulelink.dto';
@Controller('modulelinks')
export class ModulelinksController {
  constructor(private readonly moduleLinkService: ModulelinksService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll(@AuthUserInfo() authUserInfo: Users) {
    try {
      const response = await this.moduleLinkService.getAll();
      return { message: 'Show Successfully', status: HttpStatus.OK, response };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() body: CreateModuleLinkDto,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const response = await this.moduleLinkService.createModuleLink(
        body,
        authUserInfo,
      );
      return {
        message: 'Create Successfully',
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
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() body: UpdateModuleLinkDto,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const response = await this.moduleLinkService.update(
        id,
        body,
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
