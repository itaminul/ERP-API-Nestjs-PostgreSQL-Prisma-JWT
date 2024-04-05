import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentService } from './department.service';
import { PrismaService } from '../../../database/prisma/prisma.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
class MockPrismaService {}

describe('DepartmentService', () => {
  let service: DepartmentService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DepartmentService,
        { provide: PrismaService, useClass: MockPrismaService },
        {
          provide: CACHE_MANAGER,
          useValue: {}, 
        },
      ],
    }).compile();

    service = module.get<DepartmentService>(DepartmentService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
