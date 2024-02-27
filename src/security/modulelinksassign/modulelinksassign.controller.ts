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
import { ModulelinksassignService } from './modulelinksassign.service';
import { Prisma, Users } from '@prisma/client';
import { CreateModuleLinkAssing } from './dto/create.modulelinkassign.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { UpdateModuleLinkAssing } from './dto/update.modulelinkassign.dto';

@Controller('modulelinksassign')
export class ModulelinksassignController {
  constructor(
    private readonly moduleLinkAssingService: ModulelinksassignService,
  ) {}

  @Get()
  async getAll() {
    try {
      const response = await this.moduleLinkAssingService.getAll();
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
    @Body() body: CreateModuleLinkAssing,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const response = await this.moduleLinkAssingService.createModuleAssign(
        body,
        authUserInfo,
      );
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
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() body: UpdateModuleLinkAssing,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const response = await this.moduleLinkAssingService.updateModuleAssign(
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
