import { Body, Controller, Get, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ExamSetupService } from './exam-setup.service';
import { CreateExamSetupDto } from './dto/create-exam-setup.dto';
import { AuthGuard } from '@nestjs/passport';
import { UpdateExamSetupDto } from './dto/update-exam-setup.dto';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';
import { Users } from '@prisma/client';
import { userInfo } from 'os';

@Controller('exam-setup')
export class ExamSetupController {
  constructor(private readonly examService: ExamSetupService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll(@AuthUserInfo() authUserInfo: Users) {
    try {
      const results = await this.examService.getAll(authUserInfo);
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
  async create(@Body() dto: CreateExamSetupDto, userInfo: Users) {
    try {
      const results = await this.examService.create(dto, userInfo);
      return {
        message: 'Insert Successfully',
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
  async update( @Param('id') id: number, @Body() dto: UpdateExamSetupDto, userInfo) {
    try {
      const results = await this.examService.update(id, dto, userInfo);
      return {
        message: 'Insert Successfully',
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
