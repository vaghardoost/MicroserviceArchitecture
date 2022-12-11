import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.mongodb),
    ProductModule
  ],
})
export class AppModule {}
