import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Prisma, Users } from '@prisma/client';
import { CreateEmployeeDto } from './dto/create.employee.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as sharp from 'sharp';
import { ImageResizeService } from 'src/services/image-resize.service';
import * as fs from 'fs';
@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly imageResizeService: ImageResizeService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll() {
    try {
      const response = await this.employeeService.getAll();
      return { message: 'Show Successfully', status: HttpStatus.OK, response };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
      }
      throw error;
    }
  }

  // @UseGuards(AuthGuard('jwt'))
  @Post('/getEmpByDWise')
  async getEmployeeByDateWise(@Body() body) {
    try {
      console.log('body', body.fromDate);
      const fd = body.fromDate.toString();
      const td = body.toDate.toString();
      console.log('tt', fd);
      const fromDate = '2023-08-20';
      const toDate = '2023-08-26';
      const fDate = new Date(fromDate).toISOString();
      const tDate = new Date(toDate).toISOString();
      const response = await this.employeeService.getEmployeeByDateWise(
        fDate,
        tDate,
      );
      return { message: 'Show Successfully', status: HttpStatus.OK, response };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
      }
      throw error;
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/getById')
  async getById(@Param('id') id: number) {
    try {
      const response = await this.employeeService.getById(id);
      return { message: 'Show Successfully', status: HttpStatus.OK, response };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
      }
      throw error;
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAllActive() {
    try {
      const response = await this.employeeService.getAllActive();
      return { message: 'Show Successfully', status: HttpStatus.OK, response };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
      }
      throw error;
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  @UseInterceptors(
    FileInterceptor('empSignature', {
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
  async create(
    @Body() body: CreateEmployeeDto,
    @AuthUserInfo() authUserInfo: Users,
    @Req() req: Request,
    @UploadedFile() file: Express.Multer.File,
  ) {
    try {
      // Resize the image using sharp
      const resizedImageBuffer = await this.imageResizeService.resizeImage(
        file.path,
        300,
        300,
      );

      // Save the resized image to the uploads folder
      const resizedFilePath = `./uploads/employee/${file.filename}`;
      await sharp(resizedImageBuffer).toFile(resizedFilePath);
      const resizedImagePath = resizedFilePath;
      const empPhoto = resizedImagePath;

      const response = await this.employeeService.createEmpInfo(
        body,
        authUserInfo,
        empPhoto,
      );
      return {
        message: 'Insert Successfully',
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
  @Patch(':id')
  async updateEmpInfo(
    @Param('id') id: number,
    @Body() body: CreateEmployeeDto,
    @AuthUserInfo() authUserInfo: Users,
    @UploadedFile() file: Express.Multer.File,
  ) {
    try {
      const oldFilePath = './uploads/employee' + file.filename;
      if (fs.existsSync(oldFilePath)) {
        fs.unlinkSync(oldFilePath);
      }
      // Resize the image using sharp
      const resizedImageBuffer = await this.imageResizeService.resizeImage(
        file.path,
        300,
        300,
      );

      // Save the resized image to the uploads folder
      const resizedFilePath = `./uploads/employee/${file.filename}`;
      await sharp(resizedImageBuffer).toFile(resizedFilePath);
      const resizedImagePath = resizedFilePath;
      const empPhoto = resizedImagePath;
      const response = await this.employeeService.updateEmpInfo(
        id,
        body,
        authUserInfo,
        empPhoto,
      );
      return {
        message: 'Insert Successfully',
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
