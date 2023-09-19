import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateCountriesDto } from 'src/global-setup/countries/dto/create.countries.dto';
import { UpdateCountriesDto } from 'src/global-setup/countries/dto/update.countries.dto';

@Injectable()
export class JavascriptService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll() {
        return await this.prisma.country.findMany({
            where: {
                activeStatus: true
            }
        })
    }

    async create(@Body() createCountriesDto: CreateCountriesDto, authUserInfo) {
        const {
            countryName,
            countryDescription,
            countryCode
        } = createCountriesDto
        await this.prisma.country.create({
            data: {
                countryName,
                countryDescription,
                countryCode,
                createdBy: authUserInfo.id,
                createdDate: new Date().toLocaleDateString(),
                createdTime: new Date().toLocaleTimeString(),
                createdAt: new Date()
            }
        })
    }

    async update(@Param('id') id: number, @Body() updateCountriesDto: UpdateCountriesDto, authUserInfo) {
        const {
            countryName,
            countryDescription,
            countryCode,
            activeStatus
        } = updateCountriesDto
        await this.prisma.country.update({
            where: {
                id: Number(id)
            },
            data: {
                countryName,
                countryDescription,
                countryCode,
                activeStatus,
                createdBy: authUserInfo.id,
                createdDate: new Date().toLocaleDateString(),
                createdTime: new Date().toLocaleTimeString(),
                createdAt: new Date()
            }
        })
    }
}
