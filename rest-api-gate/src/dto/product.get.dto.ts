import { IsNotEmpty, IsString } from "class-validator";

export class ProductGetDTO {
  @IsString()
  @IsNotEmpty()
  public id:string;
}