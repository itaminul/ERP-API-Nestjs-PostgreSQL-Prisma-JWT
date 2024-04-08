import { Body, Inject, Injectable, Param } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateCountriesDto } from './dto/create.countries.dto';
import { UpdateCountriesDto } from './dto/update.countries.dto';


@Injectable()
export class CountriesService {
  constructor(
    @Inject('CACHE_MANAGER') private  cacheManager: Cache,
    private readonly prisma: PrismaService,
  ) {}

  async getAll(authUserInfo) {
    const countries = await this.prisma.country.findMany();

    if (countries && countries.length > 0) {
      await this.cacheManager.set('countries', countries);
      return await this.cacheManager.get('countries');
    } else {
      throw new Error('No countries found or countries are undefined.');
    }
  }

  async create(@Body() createCountriesDto: CreateCountriesDto, authUserInfo) {
    const { countryName, countryDescription, countryCode } = createCountriesDto;
    await this.prisma.country.create({
      data: {
        countryName,
        countryDescription,
        countryCode,
        createdBy: authUserInfo.id,
        createdDate: new Date().toLocaleDateString(),
        createdTime: new Date().toLocaleTimeString(),
        createdAt: new Date(),
      },
    });
  }

  async update(
    @Param('id') id: number,
    @Body() updateCountriesDto: UpdateCountriesDto,
    authUserInfo,
  ) {
    const { countryName, countryDescription, countryCode, activeStatus } =
      updateCountriesDto;
    await this.prisma.country.update({
      where: {
        id: Number(id),
      },
      data: {
        countryName,
        countryDescription,
        countryCode,
        activeStatus,
        createdBy: authUserInfo.id,
        createdDate: new Date().toLocaleDateString(),
        createdTime: new Date().toLocaleTimeString(),
        createdAt: new Date(),
      },
    });
  }
}
