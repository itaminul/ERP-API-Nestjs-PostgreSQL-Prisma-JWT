import { Controller, Get, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { ProductInfoService } from './product-info.service';
import { AuthGuard } from '@nestjs/passport';
import { Users } from '@prisma/client';

@Controller('product-info')
export class ProductInfoController {
  constructor(public readonly productInfoService: ProductInfoService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll(authUserInfo: Users) {
    try {
      const results = await this.productInfoService.getAll(authUserInfo);
      return {
        message: 'Show data successfully',
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:id')
  async getProductById(@Param('id') id: number, authUserInfo: Users) {
    try {
      const results = await this.productInfoService.getAllProductById(
        id,
        authUserInfo,
      );
      return {
        message: 'Show data successfully',
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
