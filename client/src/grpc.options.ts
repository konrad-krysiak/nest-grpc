import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'microservice:50555',
    package: 'math',
    protoPath: join(__dirname, '../src/grpc.proto'),
  },
};
