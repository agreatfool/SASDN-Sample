import {ServerUnaryCall, RpcImplCallback} from "grpc";
import {RpcContext, Middleware, MiddlewareNext} from "sasdn";
import {GetBookRequest, Book} from "../../../proto/book_pb";

export const getBookHandler: Middleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call: ServerUnaryCall = ctx.call as ServerUnaryCall;
    let callback: RpcImplCallback = ctx.callback;
    let request = call.request as GetBookRequest;

    console.log('getBook request:', request.toObject());
    let reply = new Book();
    reply.setTitle('DefaultBook');
    reply.setAuthor('DefaultAuthor');
    reply.setIsbn(request.getIsbn());
    console.log('getBook done:', reply.toObject());
    callback(null, reply);

    return Promise.resolve();
};