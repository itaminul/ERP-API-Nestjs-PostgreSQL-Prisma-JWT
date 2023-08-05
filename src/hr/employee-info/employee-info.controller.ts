import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { EmployeeService } from './employee-info.service'
import { Prisma, Users } from '@prisma/client';
import { CreateEmployeeDto } from './dto/create.employee.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { Request } from 'express';
import { CreateEduInfoDto } from './dto/create.eduinfo.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
@Controller('employee-info')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}

    @Get()
    async getAll() {
        try {
            const response = await this.employeeService.getAll()
            return { message: "Show Successfully", status: HttpStatus.OK, response}
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error
        }
    }

    @UseInterceptors(
        FileInterceptor('file', {
          storage: diskStorage({
            destination: './uploads/employee', // Destination folder where uploaded files will be stored
            filename: (req, file, callback) => {
              const randomName = Array(32)
                .fill(null)
                .map(() => Math.round(Math.random() * 16).toString(16))
                .join('');
              return callback(null, `${randomName}${extname(file.originalname)}`);
            },
          }),
          fileFilter: (req, file, callback) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
              return callback(new Error('Only image files are allowed!'), false);
            }
            callback(null, true);
          },
        }),

      )
      
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() body: CreateEmployeeDto, @AuthUserInfo() authUserInfo: Users, @Req() req: Request, @UploadedFile() file: Express.Multer.File) {
        try {
            const empPhoto= file
            //console.log("image", file)
            const response = await this.employeeService.createEmpInfo(body,authUserInfo, empPhoto)
            return { message: "Insert Successfully", status: HttpStatus.OK, response}
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error
        }
    }


    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async updateEmpInfo(@Param('id') id: number, @Body() body: CreateEmployeeDto, @AuthUserInfo() authUserInfo: Users) {
        try {
            const response = await this.employeeService.updateEmpInfo(id, body, authUserInfo)
            return { message: "Insert Successfully", status: HttpStatus.OK, response}
        } catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {

            }
            throw error
        }
    }
}
function uploadAndResizeFile(arg0: any, file: any, File: any): Function | import("@nestjs/common").NestInterceptor<any, any> {
    throw new Error('Function not implemented.');
}

