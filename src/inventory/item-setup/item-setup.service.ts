import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class ItemSetupService {
    constructor(private readonly prisma: PrismaService) {}

    async getAll() {
        return await this.prisma.invItem.findMany()
    }

    async create() {
         await this.prisma.invItem.create({
            data: {

            }
        })
    }
}
