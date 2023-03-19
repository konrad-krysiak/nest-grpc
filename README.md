# NestJS gRPC

Short demo how to configure and connect two NestJS applications via gRPC in docker environment.

To generate types from protobuf schema file automatically use ts-proto library.

## Installation

```bash
docker-compose up
```

## Demo

Use your favourite HTTP client and POST array of numbers to localhost:3000. Function returns sum of square items of this array.

```bash
curl -X POST -H "Content-Type: application/json" -d '{"data": [1,2,33]}' http://localhost:3000

```

## References

- [ts-proto](https://github.com/stephenh/ts-proto)
- [NestJS](https://nestjs.com/)
- [gRPC](https://grpc.io/)
