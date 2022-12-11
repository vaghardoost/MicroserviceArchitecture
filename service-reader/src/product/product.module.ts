import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductRedisService } from "./product.redis";
import { ProductService } from "./product.service";

@Module({
  controllers:[ProductController],
  providers:[ProductRedisService,ProductService],
})
export class ProductModule {}