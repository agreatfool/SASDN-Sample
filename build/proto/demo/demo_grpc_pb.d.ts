// package: demo
// file: demo/demo.proto

import * as grpc from "grpc";
import * as demo_demo_pb from "../demo/demo_pb";
import * as order_order_pb from "../order/order_pb";

interface IDemoServiceService extends grpc.IMethodsMap {
    getDemo: IGetDemo;
    getDemoViaName: IGetDemoViaName;
    getStreamDemo: IGetStreamDemo;
    getStreamDemos: IGetStreamDemos;
}

interface IGetDemo {
    path: string; // "/demo.DemoService/GetDemo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: demo_demo_pb.GetDemoRequest,
    responseType: demo_demo_pb.Demo,
    requestSerialize: (arg: demo_demo_pb.GetDemoRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => demo_demo_pb.GetDemoRequest;
    responseSerialize: (arg: demo_demo_pb.Demo) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => demo_demo_pb.Demo;
}
interface IGetDemoViaName {
    path: string; // "/demo.DemoService/GetDemoViaName"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestType: demo_demo_pb.GetDemoViaNameRequest,
    responseType: demo_demo_pb.Demo,
    requestSerialize: (arg: demo_demo_pb.GetDemoViaNameRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => demo_demo_pb.GetDemoViaNameRequest;
    responseSerialize: (arg: demo_demo_pb.Demo) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => demo_demo_pb.Demo;
}
interface IGetStreamDemo {
    path: string; // "/demo.DemoService/GetStreamDemo"
    requestStream: boolean; // true
    responseStream: boolean; // false
    requestType: demo_demo_pb.GetDemoRequest,
    responseType: demo_demo_pb.Demo,
    requestSerialize: (arg: demo_demo_pb.GetDemoRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => demo_demo_pb.GetDemoRequest;
    responseSerialize: (arg: demo_demo_pb.Demo) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => demo_demo_pb.Demo;
}
interface IGetStreamDemos {
    path: string; // "/demo.DemoService/GetStreamDemos"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestType: demo_demo_pb.GetDemoRequest,
    responseType: demo_demo_pb.Demo,
    requestSerialize: (arg: demo_demo_pb.GetDemoRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => demo_demo_pb.GetDemoRequest;
    responseSerialize: (arg: demo_demo_pb.Demo) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => demo_demo_pb.Demo;
}

export const DemoServiceService: IDemoServiceService;
export class DemoServiceClient extends grpc.Client {
    constructor(address: string, credentials: any, options?: grpc.IClientOptions);
    getDemo(request: demo_demo_pb.GetDemoRequest, callback: (error: Error | null, response: demo_demo_pb.Demo) => void): grpc.ClientUnaryCall;
    getDemo(request: demo_demo_pb.GetDemoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: demo_demo_pb.Demo) => void): grpc.ClientUnaryCall;
    getDemoViaName(request: demo_demo_pb.GetDemoViaNameRequest): grpc.ClientReadableStream;
    getDemoViaName(request: demo_demo_pb.GetDemoViaNameRequest, metadata: grpc.Metadata): grpc.ClientReadableStream;
    getStreamDemo(callback: (error: Error | null, response: demo_demo_pb.Demo) => void): grpc.ClientWritableStream;
    getStreamDemo(callback: (error: Error | null, metadata: grpc.Metadata, response: demo_demo_pb.Demo) => void): grpc.ClientWritableStream;
    getStreamDemos(): grpc.ClientDuplexStream;
    getStreamDemos(metadata: grpc.Metadata): grpc.ClientDuplexStream;
}

interface IDemoApiServiceService extends grpc.IMethodsMap {
    getDemoOrderApi: IGetDemoOrderApi;
}

interface IGetDemoOrderApi {
    path: string; // "/demo.DemoApiService/GetDemoOrderApi"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: demo_demo_pb.GetDemoOrderRequest,
    responseType: order_order_pb.Order,
    requestSerialize: (arg: demo_demo_pb.GetDemoOrderRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => demo_demo_pb.GetDemoOrderRequest;
    responseSerialize: (arg: order_order_pb.Order) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => order_order_pb.Order;
}

export const DemoApiServiceService: IDemoApiServiceService;
export class DemoApiServiceClient extends grpc.Client {
    constructor(address: string, credentials: any, options?: grpc.IClientOptions);
    getDemoOrderApi(request: demo_demo_pb.GetDemoOrderRequest, callback: (error: Error | null, response: order_order_pb.Order) => void): grpc.ClientUnaryCall;
    getDemoOrderApi(request: demo_demo_pb.GetDemoOrderRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: order_order_pb.Order) => void): grpc.ClientUnaryCall;
}
