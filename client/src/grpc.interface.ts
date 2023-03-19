import { Observable } from 'rxjs';

export interface IGrpcService {
  squareSumArray(numArray: INumberArray): Observable<any>;
}

interface INumberArray {
  data: number[];
}
