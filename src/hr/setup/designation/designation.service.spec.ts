import { Test, TestingModule } from '@nestjs/testing';
import { DesignationService } from './designation.service';
import { PrismaService } from '../../../database/prisma/prisma.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { CreateDesignatinDto } from './dto/create.designation.dto';
import { UpdateDesignatinDto } from './dto/update.designation.dto';

const mockAuthUserInfo = {
  id: 1,
  // Add other relevant user information
};
const MockPrismaService = {
  designation: {
    create: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    patch: jest.fn(),
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

  describe('update', () => {
    it('should update a designation', async () => {
      // Mock data
      const authUserInfo = mockAuthUserInfo;
      const designationId = 1;
      const updateDesignationDto = new UpdateDesignatinDto(); // Instantiate the DTO
      updateDesignationDto.designationName =
        updateDesignationDto.designationName;
      updateDesignationDto.designationDes = updateDesignationDto.designationDes;
      updateDesignationDto.orgId = updateDesignationDto.orgId;
      updateDesignationDto.serialNo = updateDesignationDto.serialNo;
      updateDesignationDto.activeStatus = true;
      updateDesignationDto.updatedBy = authUserInfo.id;

      const existingDesignation = {
        id: designationId,
        designationName: updateDesignationDto.designationName,
        designationDes: updateDesignationDto.designationDes,
        orgId: updateDesignationDto.orgId,
        activeStatus: true,
        updatedBy: authUserInfo.id,
      };

      const updatedDesignation = {
        ...existingDesignation,
        designationName: updateDesignationDto.designationName,
        designationDes: updateDesignationDto.designationDes,
        orgId: updateDesignationDto.orgId,
        serialNo: updateDesignationDto.serialNo,
        activeStatus: updateDesignationDto.activeStatus,
        updatedBy: updateDesignationDto.updatedBy,
      };

      // Mock PrismaService's findUnique method to return existing designation
      MockPrismaService.designation.findUnique.mockResolvedValue(
        existingDesignation,
      );
      // Mock PrismaService's update method to return the updated designation
      MockPrismaService.designation.update.mockResolvedValue(
        updatedDesignation,
      );

      // Call the update method
      const result = await service.update(
        designationId,
        updateDesignationDto,
        mockAuthUserInfo,
      );
      expect(MockPrismaService.designation.update).toHaveBeenCalledWith({
        where: { id: designationId },
        data: expect.objectContaining({
          designationName: updateDesignationDto.designationName,
          designationDes: updateDesignationDto.designationDes,
          orgId: updateDesignationDto.orgId,
          serialNo: updateDesignationDto.serialNo,
          activeStatus: true,
          updatedBy: 1,
        }),
      });

      // Verify that the result is as expected
      expect(result).toEqual(updatedDesignation);
    });
  });
});
