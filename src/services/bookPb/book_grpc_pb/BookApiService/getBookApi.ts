import {ServerUnaryCall, RpcImplCallback} from "grpc";
import {RpcContext, RpcMiddleware, MiddlewareNext} from "sasdn";
import {GetBookRequest, Book, } from "../../../../proto/bookPb/book_pb";

export const getBookApiHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call: ServerUnaryCall = ctx.call as ServerUnaryCall;
    let callback: RpcImplCallback = ctx.callback;
    let request = call.request as GetBookRequest;

    await next();

    return Promise.resolve();
};