import {ServerReadableStream, RpcImplCallback} from "grpc";
import {RpcContext, RpcMiddleware, MiddlewareNext} from "sasdn";
import {GetBookRequest, Book, } from "../../../../proto/bookPb/book_pb";

export const getGreatestBookHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call: ServerReadableStream = ctx.call as ServerReadableStream;
    let callback: RpcImplCallback = ctx.callback;

    await next();

    return Promise.resolve();
};