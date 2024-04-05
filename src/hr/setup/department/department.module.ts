import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Module({
  providers: [
    DepartmentService,
    PrismaService
  ],
  exports: [DepartmentService],
})
export class DepartmentModule {}
