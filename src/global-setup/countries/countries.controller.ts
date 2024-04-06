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
import { CountriesService } from './countries.service';
import { Prisma, Users } from '@prisma/client';
import { error } from 'console';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { CreateCountriesDto } from './dto/create.countries.dto';
import { UpdateCountriesDto } from './dto/update.countries.dto';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}
  
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll(@AuthUserInfo() authUserInfo: Users) {
    try {
      const results = await this.countriesService.getAll(authUserInfo);
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
    @Body() createCountriesDto: CreateCountriesDto,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      //   console.log("createCountriesDto", createCountriesDto)
      const response = await this.countriesService.create(
        createCountriesDto,
        authUserInfo,
      );
      return {
        message: 'Created successfully',
        status: HttpStatus.OK,
        response,
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
      }
    }
    throw error;
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCountriesDto: UpdateCountriesDto,
    @AuthUserInfo() authUserInfo: Users,
  ) {
    try {
      const response = await this.countriesService.update(
        id,
        updateCountriesDto,
        authUserInfo,
      );
      return {
        message: 'Updated successfully',
        status: HttpStatus.OK,
        response,
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
      }
    }
    throw error;
  }
}
