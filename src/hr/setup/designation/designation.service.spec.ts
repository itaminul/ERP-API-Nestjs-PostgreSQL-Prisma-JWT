import { Test, TestingModule } from '@nestjs/testing';
import { DesignationService } from './designation.service';
import { PrismaService } from '../../../database/prisma/prisma.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { CreateDesignatinDto } from './dto/create.designation.dto';

const mockAuthUserInfo = {
  id: 1,
  // Add other relevant user information
};
const MockPrismaService = {
  designation: {
    create: jest.fn(),
  },
};

describe('DesignationService', () => {
  let service: DesignationService;
  let prismaService: PrismaService;
  let module: TestingModule;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DesignationService,
        { provide: PrismaService, useValue: MockPrismaService },
        {
          provide: CACHE_MANAGER,
          useValue: {},
        },
      ],
    }).compile();
    service = module.get<DesignationService>(DesignationService);
    prismaService = module.get<PrismaService>(PrismaService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new designation', async () => {
      const authUserInfo = mockAuthUserInfo;
      const { designationName, designationDes, orgId, serialNo } =
        new CreateDesignatinDto(); // Instantiate the DTO
      const createDesignationDto: CreateDesignatinDto = {
        designationName: designationName,
        designationDes: designationDes,
        orgId: orgId,
        serialNo: serialNo,
        createdBy: authUserInfo.id,
      };

      const expectedResult = { id: 1, ...createDesignationDto };

      jest
        .spyOn(MockPrismaService.designation, 'create')
        .mockResolvedValue(expectedResult);

      const result = await service.create(
        createDesignationDto,
        mockAuthUserInfo,
      );
      expect(result).toEqual(expectedResult);
      expect(MockPrismaService.designation.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          designationName: createDesignationDto.designationName,
          designationDes: createDesignationDto.designationDes,
          orgId: createDesignationDto.orgId,
          serialNo: createDesignationDto.serialNo,
          createdBy: createDesignationDto.createdBy,
        }),
      });
    });
  });
});
