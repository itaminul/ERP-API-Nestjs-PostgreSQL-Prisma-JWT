import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { AuthGuard } from '@nestjs/passport';
import { Users } from '@prisma/client';
import { CreateStudentDto } from './dto/create.student.dto';
import { UpdateStudentDto } from './dto/update.student.dto';

@Controller('student')
export class StudentController {
  constructor(public readonly studentService: StudentService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll(authUserInfo: Users) {
    try {
      const results = await this.studentService.getAll(authUserInfo);
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
  async create(authUserInfo: Users, dto: CreateStudentDto) {
    try {
      const results = await this.studentService.create(authUserInfo, dto);
      return {
        message: 'Created data successfully',
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':/id')
  async update(
    @Param('id') id: number,
    authUserInfo: Users,
    dto: UpdateStudentDto,
  ) {
    try {
      const results = await this.studentService.update(id, dto, authUserInfo);
      return {
        message: 'Updated data successfully',
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
