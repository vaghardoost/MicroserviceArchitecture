import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductDTO {
  @IsString()
  @IsNotEmpty()
  public title:string;

  @IsString()
  public content:string;

  @IsNumber()
  @IsNotEmpty()
  public price:number;
}