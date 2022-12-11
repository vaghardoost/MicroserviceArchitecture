import { Controller } from "@nestjs/common";
import { MessagePattern,Payload } from "@nestjs/microservices"
import { ProductModel } from "./product.model";
import { ProductService } from "./product.service";

@Controller("product")
export class ProductController {

  constructor(private readonly service:ProductService){}

  @MessagePattern("writer.check")
  public check() {
    return { message:'i am alive!' }
  }

  @MessagePattern("writer.add")
  public async add(@Payload() product:ProductModel){
    return this.service.add(product);
  }

}
