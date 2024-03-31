// user.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { DistrictService } from './district.service';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';
// Mock PrismaService
class PrismaServiceMock {
  async userFindUnique() {
    return { id: 1, name: 'Test User' }; // Mock data
  }
}

describe('DistrictService', () => {
  let service: DistrictService;
  let prisma = PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DistrictService,
        { provide: 'Prisma', useClass: prisma }, // Provide mock PrismaService
      ],
    }).compile();

    service = module.get<DistrictService>(DistrictService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a user by ID', async () => {
    const userId = 1;
    const user = await service.getAll();
    expect(user).toBeDefined();
    expect(user).toEqual(userId);
  });
});
