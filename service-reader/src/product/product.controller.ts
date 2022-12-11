import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {

  constructor(private readonly service:ProductService){}

  @MessagePattern('reader.get')
  public async get(@Payload() data:{id:string}) {
    return this.service.get(data.id);
  }

  @MessagePattern('reader.all') 
  public async all() {
    return this.service.all();
  }
}