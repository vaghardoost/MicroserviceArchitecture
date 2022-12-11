import { Injectable } from "@nestjs/common";
import { ProductModel } from "./product.model";
import { ProductRedisService } from "./product.redis";

@Injectable()
export class ProductService {
  constructor(private readonly redisService:ProductRedisService){}

  public async all() {
    const raw = await this.redisService.all();
    const products:ProductModel[] = [];
    for (const key in raw) {
      products.push(JSON.parse(raw[key]));
    }
    return products;
  }

  public async get(id:string){
    const raw = await this.redisService.get(id);
    const product:ProductModel = JSON.parse(raw);
    return product;
  }
}