import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { PrismaService } from '../../../database/prisma/prisma.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager'; // Import CACHE_MANAGER
class MockPrismaService {}
describe('DepartmentController', () => {
  let controller: DepartmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartmentController],
      providers: [
        DepartmentService,
        { provide: PrismaService, useClass: MockPrismaService },
        { provide: CACHE_MANAGER, useValue: {} },
      ],
    }).compile();

    controller = module.get<DepartmentController>(DepartmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

});
