import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateProductSetupDto } from './dto/create.product.setup.dto';

@Injectable()
export class ProductInfoService {
    constructor(public readonly prisma: PrismaService) {}

    async getAll() {
        return await this.prisma.invItemSetup.findMany({
            where: {
                activeStatus: true
            }
        })
    }

}
