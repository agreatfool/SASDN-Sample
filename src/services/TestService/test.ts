import {RpcImplCallback, ServerUnaryCall} from "grpc";
import {Context, Middleware, MiddlewareNext} from "sasdn";

export const testHandler: Middleware = async (ctx: Context, next: MiddlewareNext) => {
    let call: ServerUnaryCall = ctx.call as ServerUnaryCall;
    let callback: RpcImplCallback = ctx.callback;

    console.log("testHandler handler");
    await next();
    console.log("testHandler done");

    return Promise.resolve();
};