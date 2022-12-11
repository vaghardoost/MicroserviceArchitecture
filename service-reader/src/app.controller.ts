import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern("reader.check")
  getHello() {    
    return { message : 'I am alive!' }
  }
}
