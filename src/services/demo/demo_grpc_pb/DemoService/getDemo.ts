import {ServerUnaryCall, RpcImplCallback} from "grpc";
import {RpcContext, RpcMiddleware, MiddlewareNext} from "sasdn";
import {GetDemoRequest, Demo, } from "../../../../proto/demo/demo_pb";
import {DemoLogic} from "../../../../logic/microservice/DemoLogic";

export const getDemoHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call: ServerUnaryCall = ctx.call as ServerUnaryCall;
    let callback: RpcImplCallback = ctx.callback;
    let request = call.request as GetDemoRequest;

    try {
        console.log(`[MicroService] getDemoHandler, request: ${JSON.stringify(request.toObject())}`);
        const response = await DemoLogic.getDemo(request);
        console.log(`[MicroService] getDemoHandler, response: ${JSON.stringify(response.toObject())}`);
        callback(null, response);
    } catch (e) {
        callback(e, null);
    }

    return Promise.resolve();
};