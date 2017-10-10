"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const demo_grpc_pb_1 = require("../proto/demo/demo_grpc_pb");
const order_grpc_pb_1 = require("../proto/order/order_grpc_pb");
const getDemo_1 = require("./demo/demo_grpc_pb/DemoService/getDemo");
const getDemoViaName_1 = require("./demo/demo_grpc_pb/DemoService/getDemoViaName");
const getStreamDemo_1 = require("./demo/demo_grpc_pb/DemoService/getStreamDemo");
const getStreamDemos_1 = require("./demo/demo_grpc_pb/DemoService/getStreamDemos");
const getDemoOrderApi_1 = require("./demo/demo_grpc_pb/DemoApiService/getDemoOrderApi");
const getOrder_1 = require("./order/order_grpc_pb/OrderService/getOrder");
exports.registerServices = function (app) {
    app.server.addService(demo_grpc_pb_1.DemoServiceService, {
        getDemo: (call, callback) => __awaiter(this, void 0, void 0, function* () {
            let wrappedHandler = app.wrapGrpcHandler(getDemo_1.getDemoHandler);
            wrappedHandler(call, callback).then(_ => _);
        }),
        getDemoViaName: (call) => __awaiter(this, void 0, void 0, function* () {
            let wrappedHandler = app.wrapGrpcHandler(getDemoViaName_1.getDemoViaNameHandler);
            wrappedHandler(call).then(_ => _);
        }),
        getStreamDemo: (call, callback) => __awaiter(this, void 0, void 0, function* () {
            let wrappedHandler = app.wrapGrpcHandler(getStreamDemo_1.getStreamDemoHandler);
            wrappedHandler(call, callback).then(_ => _);
        }),
        getStreamDemos: (call) => __awaiter(this, void 0, void 0, function* () {
            let wrappedHandler = app.wrapGrpcHandler(getStreamDemos_1.getStreamDemosHandler);
            wrappedHandler(call).then(_ => _);
        }),
    });
    app.server.addService(demo_grpc_pb_1.DemoApiServiceService, {
        getDemoOrderApi: (call, callback) => __awaiter(this, void 0, void 0, function* () {
            let wrappedHandler = app.wrapGrpcHandler(getDemoOrderApi_1.getDemoOrderApiHandler);
            wrappedHandler(call, callback).then(_ => _);
        }),
    });
    app.server.addService(order_grpc_pb_1.OrderServiceService, {
        getOrder: (call, callback) => __awaiter(this, void 0, void 0, function* () {
            let wrappedHandler = app.wrapGrpcHandler(getOrder_1.getOrderHandler);
            wrappedHandler(call, callback).then(_ => _);
        }),
    });
};
//# sourceMappingURL=Register.js.map