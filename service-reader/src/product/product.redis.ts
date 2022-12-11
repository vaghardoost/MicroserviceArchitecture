import { Injectable } from "@nestjs/common";
import Redis from "ioredis"
import { ProductModel } from "./product.model";


@Injectable()
export class ProductRedisService {
  private readonly conn:Redis = new Redis(process.env.redis)

  public async get(id:string) {
    return this.conn.hget('product',id);
  }

  public async all() {
    return this.conn.hgetall('product');
  }
}