import {ServerWritableStream} from "grpc";
import {Context, Middleware, MiddlewareNext} from "sasdn";
import {Book, GetBookViaAuthor} from "../../proto/book_pb";

export const getBooksViaAuthorHandler: Middleware = async (ctx: Context, next: MiddlewareNext) => {
    let call: ServerWritableStream = ctx.call as ServerWritableStream;

    let request = call.request as GetBookViaAuthor;
    console.log('getBooksViaAuthor request:', request.toObject());
    for (let i = 1; i <= 10; i++) {
        let reply = new Book();
        reply.setTitle(`Book${i}`);
        reply.setAuthor(request.getAuthor());
        reply.setIsbn(i);
        console.log('getBooksViaAuthor write:', reply.toObject());
        call.write(reply);
    }
    console.log('getBooksViaAuthor done.');
    call.end();

    return Promise.resolve();
};