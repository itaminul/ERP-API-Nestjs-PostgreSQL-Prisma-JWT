import { Module } from "@nestjs/common";
import { ProductInfoController } from "src/ecommerce/product-info/product-info.controller";
import { ProductInfoModule } from "src/ecommerce/product-info/product-info.module";
import { ProductInfoService } from "src/ecommerce/product-info/product-info.service";

@Module({
  imports: [
    ProductInfoModule
  ],
  controllers: [
    ProductInfoController
  ],
  providers: [
    ProductInfoService
  ]
})

export class ProductInformationModule{}