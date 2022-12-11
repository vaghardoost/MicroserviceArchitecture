import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices/enums';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([{
      name:"kafka-client",
      transport:Transport.KAFKA,
      options:{
        client:{
          clientId:'main',
          brokers:[process.env.kafka]
        },
        consumer:{
          groupId:'gate'
        }
      },
    }])
  ],
  controllers: [AppController],
})
export class AppModule {}
