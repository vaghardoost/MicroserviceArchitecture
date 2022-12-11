import { Body, Controller, Get, OnModuleInit, Param, Post, ValidationPipe } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import { ClientKafka } from "@nestjs/microservices"
import { ProductDTO } from './dto/product.dto';
import { ProductGetDTO } from './dto/product.get.dto';

@Controller()
export class AppController implements OnModuleInit {

  constructor(@Inject('kafka-client') private readonly client:ClientKafka) {}
  
  async onModuleInit() {
    this.client.subscribeToResponseOf("writer.check");
    this.client.subscribeToResponseOf("writer.add");
    
    this.client.subscribeToResponseOf("reader.check");
    this.client.subscribeToResponseOf("reader.all");
    this.client.subscribeToResponseOf("reader.get");

    await this.client.connect();
  }

  @Get("check/reader")
  readerTest() {
    return this.client.send("reader.check",{})
  }

  @Get("check/writer")
  writerTest() {
    return this.client.send("writer.check",{})
  }

  @Post("product")
  addProduct(@Body(ValidationPipe) dto:ProductDTO){
    return this.client.send("writer.add",dto);
  }

  @Get("product/:id")
  getProduct(@Param("id") id:string){
    return this.client.send("reader.get",{id:id})
  }

  @Get("product")
  allProduct(){
    return this.client.send("reader.all",{});
  }

}
