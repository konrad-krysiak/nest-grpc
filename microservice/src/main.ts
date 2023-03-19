import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(join(__dirname, '../src/math/math.proto'));
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:50555',
        package: 'math',
        protoPath: join(__dirname, '../src/math/math.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();
