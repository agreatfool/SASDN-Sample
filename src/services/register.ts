///<reference path="../../node_modules/grpc-tsd/src/grpc.d.ts"/>
import {IServerCall, RpcImplCallback} from "grpc";
import {RpcApplication, WrappedHandler} from "sasdn";

import {
    DemoServiceService,
    DemoApiServiceService,
} from "../proto/demo/demo_grpc_pb";
import {
    OrderServiceService,
} from "../proto/order/order_grpc_pb";


import {getDemoHandler} from "./demo/demo_grpc_pb/DemoService/getDemo";
import {getDemoViaNameHandler} from "./demo/demo_grpc_pb/DemoService/getDemoViaName";
import {getStreamDemoHandler} from "./demo/demo_grpc_pb/DemoService/getStreamDemo";
import {getStreamDemosHandler} from "./demo/demo_grpc_pb/DemoService/getStreamDemos";

import {getDemoOrderApiHandler} from "./demo/demo_grpc_pb/DemoApiService/getDemoOrderApi";


import {getOrderHandler} from "./order/order_grpc_pb/OrderService/getOrder";

export const registerServices = function (app: RpcApplication) {

    app.server.addService(DemoServiceService, {
        getDemo: async (call: IServerCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getDemoHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
        getDemoViaName: async (call: IServerCall) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getDemoViaNameHandler);
            wrappedHandler(call).then(_ => _);
        },
        getStreamDemo: async (call: IServerCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getStreamDemoHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
        getStreamDemos: async (call: IServerCall) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getStreamDemosHandler);
            wrappedHandler(call).then(_ => _);
        },
    });

    app.server.addService(DemoApiServiceService, {
        getDemoOrderApi: async (call: IServerCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getDemoOrderApiHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
    });

    app.server.addService(OrderServiceService, {
        getOrder: async (call: IServerCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getOrderHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
    });

};