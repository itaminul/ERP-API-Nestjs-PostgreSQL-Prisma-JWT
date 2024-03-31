// user.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { DistrictService } from './district.service';
import { DistrictController } from './district.controller';

//https://www.youtube.com/watch?v=09dkUfzRG24
describe('DistrictController', () => {
  let appController: DistrictController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistrictController],
      providers: [DistrictService]
    }).compile();

    appController = module.get<DistrictController>(DistrictController);
  });

  describe('root', () => {

  });
});
