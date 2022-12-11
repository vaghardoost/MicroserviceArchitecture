import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from "@nestjs/microservices"
import { Transport } from '@nestjs/microservices/enums';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport:Transport.KAFKA,
      options:{
        client:{
          clientId:"writer",
          brokers:[process.env.kafka]
        },
        consumer:{
          groupId:"writer"
        }
      }
    }
  );
  await app.listen();
}
bootstrap();
