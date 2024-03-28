import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateProductSetupDto } from './dto/create.product.setup.dto';

@Injectable()
export class ProductInfoService {
  constructor(public readonly prisma: PrismaService) {}

  async getAll(authUserInfo) {
    return await this.prisma.invItemSetup.findMany({
      where: {
        activeStatus: true,
      },
    });
  }

  async getAllProductById(@Param('id') id: number, authUserInfo) {
    return await this.prisma.invItemSetup.findUnique({
      where: {
        id: Number(id),
        activeStatus: true,
      },
    });
  }
}
