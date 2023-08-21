import { Controller, Get, HttpStatus, UseGuards } from '@nestjs/common';
import { ItemSupplierService } from './item-supplier.service';
import { Prisma, Users } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserInfo } from 'src/decorator/auth.user.info.decorator';

@Controller('item-supplier')
export class ItemSupplierController {
    constructor(private readonly itemSupplierService: ItemSupplierService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAll(@AuthUserInfo() authUserInfo: Users){
        try {
            const response = await this.itemSupplierService.getAll(authUserInfo)
            return { message: "Show Successfully", status: HttpStatus.OK, response }
          } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
      
            }
            throw error
          }
    }
}
