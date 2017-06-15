import {ServerUnaryCall, RpcImplCallback} from "grpc";
import {Context, Middleware, MiddlewareNext} from "sasdn";
import {GetBookRequest, Book} from "../../../proto/book_pb";

export const testHandler: Middleware = async (ctx: Context, next: MiddlewareNext) => {
    let call: ServerUnaryCall = ctx.call as ServerUnaryCall;
    let callback: RpcImplCallback = ctx.callback;
    let request = call.request as GetBookRequest;

    await next();

    return Promise.resolve();
};