import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  squareSumArray(data: Array<number>): number {
    return data.reduce((acc, cur) => acc + cur * cur, 0);
  }
}
