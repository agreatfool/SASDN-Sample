import {ServerWritableStream} from "grpc";
import {RpcContext, RpcMiddleware, MiddlewareNext} from "sasdn";
import {GetDemoViaNameRequest, Demo, } from "../../../../proto/demo/demo_pb";
import {DemoLogic} from "../../../../logic/microservice/DemoLogic";

export const getDemoViaNameHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call: ServerWritableStream = ctx.call as ServerWritableStream;
    let request = call.request as GetDemoViaNameRequest;

    console.log(`[MicroService] getDemoViaNameHandler, request: ${JSON.stringify(request.toObject())}`);
    await DemoLogic.getDemoViaAuthor(request, call, ctx);
    console.log(`[MicroService] getDemoViaNameHandler done`);

    call.end();

    return Promise.resolve();
};