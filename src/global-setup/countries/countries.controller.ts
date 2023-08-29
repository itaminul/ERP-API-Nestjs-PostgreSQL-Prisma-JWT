import { Body, Controller, Get, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { Prisma, Users } from '@prisma/client';
import { error } from 'console';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { CreateCountriesDto } from './dto/create.countries.dto';
import { UpdateCountriesDto } from './dto/update.countries.dto';

@Controller('countries')
export class CountriesController {
    constructor(private readonly countriesService: CountriesService) { }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    async getAll(@AuthUserInfo() authUserInfo: Users) {
        try {

            const ids = [1,3]
            const res = await this.countriesService.getAll(authUserInfo)
            const newArray = res.reduce((acc, obj) => obj.id, 0)
            console.log("res", newArray)

            // const firstIndex = res.indexOf(ids);


            const response = await this.countriesService.getAll(authUserInfo)
         //   console.log("response", response)
            return { message: "Show successfully", status: HttpStatus.OK, response }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError){

            }
        }
        throw error
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() createCountriesDto: CreateCountriesDto, @AuthUserInfo() authUserInfo: Users) {
        try {
         //   console.log("createCountriesDto", createCountriesDto)
            const response = await this.countriesService.create(createCountriesDto,authUserInfo)
            return { message: "Created successfully", status: HttpStatus.OK, response }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError){

            }
        }
        throw error
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateCountriesDto: UpdateCountriesDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.countriesService.update(id, updateCountriesDto,authUserInfo)
            return { message: "Updated successfully", status: HttpStatus.OK, response }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError){

            }
        }
        throw error
    }
}

