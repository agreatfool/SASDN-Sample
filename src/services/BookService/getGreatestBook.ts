import {RpcImplCallback, ServerReadableStream} from "grpc";
import {Context, Middleware, MiddlewareNext} from "sasdn";
import {Book, GetBookRequest} from "../../proto/book_pb";

export const getGreatestBookHandler: Middleware = async (ctx: Context, next: MiddlewareNext) => {
    let call: ServerReadableStream = ctx.call as ServerReadableStream;
    let callback: RpcImplCallback = ctx.callback;

    let lastOne: GetBookRequest;
    call.on('data', function (request: GetBookRequest) {
        console.log('getGreatestBook:', request.toObject());
        lastOne = request;
    });
    call.on('end', function () {
        let reply = new Book();
        reply.setIsbn(lastOne.getIsbn());
        reply.setTitle('LastOne');
        reply.setAuthor('LastOne');
        console.log('getGreatestBook done:', reply.toObject());
        callback(null, reply);
    });

    return Promise.resolve();
};