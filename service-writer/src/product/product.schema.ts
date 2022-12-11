import {Schema} from "mongoose"
export const productSchema = new Schema({
  id:{ required:true , type:String },
  title:{ required:true , type:String },
  content:{ required:true , type:String },
  price:{ required:true , type:Number },
})