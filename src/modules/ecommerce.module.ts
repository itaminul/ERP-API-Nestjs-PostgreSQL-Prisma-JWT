import { Module } from "@nestjs/common";
import { OrderController } from "src/ecommerce/order/order.controller";
import { OrderModule } from "src/ecommerce/order/order.module";
import { OrderService } from "src/ecommerce/order/order.service";
import { ProductInfoController } from "src/ecommerce/product-info/product-info.controller";
import { ProductInfoModule } from "src/ecommerce/product-info/product-info.module";
import { ProductInfoService } from "src/ecommerce/product-info/product-info.service";

@Module({
  imports: [
    ProductInfoModule,
    OrderModule
  ],
  controllers: [
    ProductInfoController,
    OrderController
  ],
  providers: [
    ProductInfoService,
    OrderService
  ]
})

export class EcommerceModule{}