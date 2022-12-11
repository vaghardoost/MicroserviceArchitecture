import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices'
import { Transport } from '@nestjs/microservices/enums';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport:Transport.KAFKA,
      options:{
        client:{
          brokers:[process.env.kafka]
        }
      }
    }
  );
  await app.listen();
}
bootstrap();
