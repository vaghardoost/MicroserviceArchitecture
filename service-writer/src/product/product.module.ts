import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductController } from "./product.controller";
import { ProductRedisService } from "./product.redis";
import { productSchema } from "./product.schema";
import { ProductService } from "./product.service";

@Module({
  controllers:[ProductController],
  providers:[ProductService,ProductRedisService],
  imports:[
    MongooseModule.forFeature([{name:'product',schema:productSchema}])
  ]
})
export class ProductModule {}
