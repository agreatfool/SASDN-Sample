import {ServerUnaryCall, RpcImplCallback} from "grpc";
import {RpcContext, RpcMiddleware, MiddlewareNext} from "sasdn";
import {GetBookViaAuthorRequest, BookMap, } from "../../../../proto/bookPb/book_pb";

export const getBooksViaAuthorApiHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call: ServerUnaryCall = ctx.call as ServerUnaryCall;
    let callback: RpcImplCallback = ctx.callback;
    let request = call.request as GetBookViaAuthorRequest;

    await next();

    return Promise.resolve();
};