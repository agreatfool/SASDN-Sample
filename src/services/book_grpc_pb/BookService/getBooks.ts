import {ServerDuplexStream} from "grpc";
import {RpcContext, Middleware, MiddlewareNext} from "sasdn";
import {GetBookRequest, Book} from "../../../proto/book_pb";

export const getBooksHandler: Middleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call: ServerDuplexStream = ctx.call as ServerDuplexStream;

    call.on('data', function (request: GetBookRequest) {
        console.log('getBooks:', request.toObject());
        let reply = new Book();
        reply.setTitle(`Book${request.getIsbn()}`);
        reply.setAuthor(`Author${request.getIsbn()}`);
        reply.setIsbn(request.getIsbn());
        console.log('getBooks write:', reply.toObject());
        call.write(reply);
    });
    call.on('end', function () {
        console.log('getBooks done.');
        call.end();
    });

    return Promise.resolve();
};