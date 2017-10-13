import {ServerReadableStream, RpcImplCallback} from "grpc";
import {RpcContext, RpcMiddleware, MiddlewareNext} from "sasdn";
import {GetDemoRequest, Demo, } from "../../../../proto/demo/demo_pb";
import {DemoLogic} from "../../../../logic/microservice/DemoLogic";

export const getStreamDemoHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call: ServerReadableStream = ctx.call as ServerReadableStream;
    let callback: RpcImplCallback = ctx.callback;

    console.log(`[MicroService] getStreamDemoHandler start`);
    const response = await DemoLogic.getStreamDemo(call, ctx);
    console.log(`[MicroService] getStreamDemoHandler done`);

    callback(null, response);

    return Promise.resolve();
};