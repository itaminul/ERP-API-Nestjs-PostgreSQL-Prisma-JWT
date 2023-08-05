import { BadRequestException, Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, NotFoundException, Param, Patch, Post, Request, Session, UseGuards } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { CreateModulesDto } from './dto/create.modules.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { Prisma, Users } from '@prisma/client';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/decorator/role.enum';
import { UpdateModulesDto } from './dto/update.modules.dto';

@Controller('security-all-module')
export class ModulesController {
    constructor(private readonly modulesService: ModulesService, prisma: PrismaService) {}

 
    @UseGuards(AuthGuard('jwt'))    
    // @UseGuards(AuthenticatedGuard)
    @Get() 
    async getAll(@Request() req, @Session() session: Record<string, any>) {
        try {

            //  console.log("authUserInfo information", authUserInfo)
            const response = await this.modulesService.getAll()
            return { message: "Show Successfully", status: HttpStatus.OK, response}
        } catch (error) {
            throw new BadRequestException(error)
        }
    }


    @UseGuards(AuthGuard('jwt'))
    @Get('orgWise')
    async getAllByOrganizationWise(@AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.modulesService.getAllByOrganizationWise(authUserInfo)
            return { message: "Show Module By Organization Wise", status: HttpStatus.OK, response}
        }catch(error) {
            throw new BadRequestException(error)
        }

    }
    

    @UseGuards(AuthGuard('jwt'))
    @Post()  
    async create(@Body() dto: CreateModulesDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.modulesService.create(dto, authUserInfo)
            return { message: "Created Successfully", status: HttpStatus.OK, response }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

             }
             throw error
            // throw new prismaError(error)
        }
    }



    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async update(@Param('id') id: number, @Body() body: UpdateModulesDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            
            const response = await this.modulesService.update(id,body, authUserInfo)
            return { message: 'Updated Successfully', status: HttpStatus.OK, response}
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error;
        }
    }
}
