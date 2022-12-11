import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose/dist/common";
import { randomUUID } from "crypto";
import { Model } from "mongoose";
import { ProductModel } from "./product.model";
import { ProductRedisService } from "./product.redis";

@Injectable()
export class ProductService {
  constructor(
    private readonly redis:ProductRedisService,
    @InjectModel('product') private readonly mongo:Model<ProductModel>
  ){}

  public async add(product:ProductModel){
    const productModel = {id:randomUUID(),...product};
    const mongoModel = await this.mongo.create(productModel);
    await mongoModel.save();
    this.redis.addProduct(productModel);
    return productModel;
  }
}