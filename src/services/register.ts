///<reference path="../../node_modules/grpc-tsd/src/grpc.d.ts"/>
import {RpcImplCallback, ServerDuplexStream, ServerReadableStream, ServerUnaryCall, ServerWritableStream} from "grpc";
import {Application, WrappedHandler} from "sasdn";

import {BookServiceService, TestServiceService} from "../proto/book_grpc_pb";

import {getBookHandler} from "./BookService/getBook";
import {getBooksHandler} from "./BookService/getBooks";
import {getBooksViaAuthorHandler} from "./BookService/getBooksViaAuthor";
import {getGreatestBookHandler} from "./BookService/getGreatestBook";

import {testHandler} from "./TestService/test";

export const registerServices = function (app: Application) {

    app.server.addService(BookServiceService, {
        getBook: async (call: ServerUnaryCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getBookHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
        getBooksViaAuthor: function getBooksViaAuthor(call: ServerWritableStream) {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getBooksViaAuthorHandler);
            wrappedHandler(call).then(_ => _);
        },
        getGreatestBook: (call: ServerReadableStream, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getGreatestBookHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
        getBooks: (call: ServerDuplexStream) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getBooksHandler);
            wrappedHandler(call).then(_ => _);
        },
    });

    app.server.addService(TestServiceService, {
        test: async (call: ServerUnaryCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(testHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
    });

};