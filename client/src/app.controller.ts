import { Body, Controller, OnModuleInit, Post } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { IGrpcService } from './grpc.interface';
import { microserviceOptions } from './grpc.options';

@Controller()
export class AppController implements OnModuleInit {
  @Client(microserviceOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('MathService');
  }

  @Post()
  calc(@Body('data') data: number[]) {
    return this.grpcService.squareSumArray({ data });
  }
}
