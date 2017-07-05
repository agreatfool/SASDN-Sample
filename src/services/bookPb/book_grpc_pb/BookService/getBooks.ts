import {ServerDuplexStream} from "grpc";
import {RpcContext, RpcMiddleware, MiddlewareNext} from "sasdn";
import {GetBookRequest, Book, } from "../../../../proto/bookPb/book_pb";

export const getBooksHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call: ServerDuplexStream = ctx.call as ServerDuplexStream;

    await next();

    return Promise.resolve();
};