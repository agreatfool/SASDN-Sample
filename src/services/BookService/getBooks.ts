import {ServerDuplexStream} from "grpc";
import {Context, Middleware, MiddlewareNext} from "sasdn";
import {Book, GetBookRequest} from "../../proto/book_pb";

export const getBooksHandler: Middleware = async (ctx: Context, next: MiddlewareNext) => {
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