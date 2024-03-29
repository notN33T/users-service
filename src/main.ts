import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'user_service',
        url: '0.0.0.0:50051',
        protoPath: join(__dirname, '../src/user/user.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();
