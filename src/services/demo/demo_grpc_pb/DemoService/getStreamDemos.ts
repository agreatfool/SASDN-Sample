import {ServerDuplexStream} from "grpc";
import {RpcContext, RpcMiddleware, MiddlewareNext} from "sasdn";
import {GetDemoRequest, Demo, } from "../../../../proto/demo/demo_pb";
import {DemoLogic} from "../../../../logic/microservice/DemoLogic";

export const getStreamDemosHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call: ServerDuplexStream = ctx.call as ServerDuplexStream;

    console.log(`[MicroService] getStreamDemosHandler start`);
    await DemoLogic.getStreamDemos(call, ctx);
    console.log(`[MicroService] getStreamDemosHandler done`);

    return Promise.resolve();
};