import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import {  CreateMeasurementsDto } from './dto/create.measurements.dto';
import {  UpdateMeasurementsDto } from './dto/update.measurements.dto';

@Injectable()
export class MeasurementsService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll(authUserInfo) {
        return await this.prisma.measurement.findMany({
            where: {
                orgId: authUserInfo.id
            }
        })
    }

    async create(@Body() createMeasurements: CreateMeasurementsDto, authUserInfo) {
        const { measurementName, measurementDescription, remarks} = createMeasurements
        await this.prisma.measurement.create({

            data: {
                measurementName,
                 measurementDescription,
                 remarks,
                orgId: authUserInfo.orgId,
                createdBy: authUserInfo.id,
                createdDate: new Date().toLocaleDateString(),
                createdTime: new Date().toLocaleTimeString(),
                createdAt: new Date()

            }
        })
    }
    async update(@Param('id') id: number, @Body() updateMeasurements: UpdateMeasurementsDto, authUserInfo) {
        const { measurementName, measurementDescription,remarks, activeStatus } = updateMeasurements
        await this.prisma.measurement.update({
            where: {
                id: Number(id)
            },
            data: {
                measurementName, 
                measurementDescription,
                remarks,
                activeStatus,
                orgId: authUserInfo.orgId,
                updatedBy: authUserInfo.id,
                updatedDate: new Date().toLocaleDateString(),
                updatedTime: new Date().toLocaleTimeString(),
                updatedAt: new Date()

            }
        })
    }
}


