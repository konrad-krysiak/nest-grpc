import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ArrayOfNumbers, SquareSum } from './interfaces/math';
import { MathService } from './math.service';

@Controller()
export class MathController {
  private logger = new Logger('MathController');
  constructor(private mathService: MathService) {}

  @GrpcMethod('MathService', 'SquareSumArray')
  squareSumArray(
    data: ArrayOfNumbers,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): SquareSum {
    this.logger.log('data: ' + JSON.stringify(data));
    return { sum: this.mathService.squareSumArray(data.data) };
  }
}
