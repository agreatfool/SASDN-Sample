///<reference path="../node_modules/grpc-tsd/src/grpc.d.ts"/>
import {RpcImplCallback, ServerDuplexStream, ServerReadableStream, ServerUnaryCall, ServerWritableStream} from "grpc";

import * as fs from "fs";
import * as util from "util";

import {BookServiceService} from "./proto/book_grpc_pb";
import {Book, GetBookRequest} from "./proto/book_pb";
import {Application, Context, Middleware, MiddlewareNext} from "sasdn";

const debug = require('debug')('SASDN:application');

const app = new Application();

async function readDummyLen(): Promise<number> {
    //noinspection TypeScriptUnresolvedFunction
    return Promise.resolve(
        (await (util as any).promisify(fs.readFile)('/tmp/protoc-gen-ts.debug.log')).toString().length
    );
}

app.use(async function (ctx, next) {
    console.log('>> one');
    await next();
    console.log('<< one');
});

app.use(async function (ctx, next) {
    console.log('>> two');
    await next();
    console.log('<< two');
});

app.use(async function (ctx, next) {
    console.log('>> three');
    await next();
    console.log('<< three');
});

app.server.addService(BookServiceService, {
    getBook: async (call: ServerUnaryCall, callback: RpcImplCallback) => {
        let request = call.request as GetBookRequest;
        console.log('getBook request:', request.toObject());
        let reply = new Book();
        reply.setTitle('DefaultBook');
        reply.setAuthor('DefaultAuthor');
        reply.setIsbn(request.getIsbn());
        console.log('log length:', await readDummyLen());
        console.log(reply.toObject());
        callback(null, reply);
    },
    getBooksViaAuthor: (call: ServerWritableStream) => {
        console.log("getBooksViaAuthor entered");
        let handler: Middleware = async (ctx: Context, next: MiddlewareNext) => {
            console.log("getBooksViaAuthor handler");
            console.log('await file length:', await readDummyLen());
            await next();
            console.log("getBooksViaAuthor done");
            return Promise.resolve("here?");
        };
        let composed = app.wrapGrpcHandler(handler, call);
        composed(call).then();
    },
    getGreatestBook: (call: ServerReadableStream, callback) => {

    },
    getBooks: (call: ServerDuplexStream) => {

    }
});

app.bind('127.0.0.1:50051').start();