import {ServerWritableStream} from "grpc";
import {RpcContext, RpcMiddleware, MiddlewareNext} from "sasdn";
import {GetBookViaAuthorRequest, Book, } from "../../../../proto/bookPb/book_pb";

export const getBooksViaAuthorHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call: ServerWritableStream = ctx.call as ServerWritableStream;
    let request = call.request as GetBookViaAuthorRequest;

    await next();

    return Promise.resolve();
};