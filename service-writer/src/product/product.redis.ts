import Redis from "ioredis";
import { ProductModel } from "./product.model";

export class ProductRedisService {
  private readonly conn:Redis = new Redis(process.env.redis);
  
    
  public addProduct(product:ProductModel){
    this.conn.hset('product',{[product.id]:JSON.stringify(product)})
  }
}
