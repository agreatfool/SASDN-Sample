///<reference path="../../node_modules/grpc-tsd/src/grpc.d.ts"/>
import {IServerCall, RpcImplCallback} from "grpc";
import {Application, WrappedHandler} from "sasdn";

import {
    BookServiceService,
    TestServiceService,
} from "../proto/book_grpc_pb";


import {getBookHandler} from "./book_grpc_pb/BookService/getBook";
import {getBooksViaAuthorHandler} from "./book_grpc_pb/BookService/getBooksViaAuthor";
import {getGreatestBookHandler} from "./book_grpc_pb/BookService/getGreatestBook";
import {getBooksHandler} from "./book_grpc_pb/BookService/getBooks";

import {testHandler} from "./book_grpc_pb/TestService/test";

export const registerServices = function (app: Application) {

    app.server.addService(BookServiceService, {
        getBook: async (call: IServerCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getBookHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
        getBooksViaAuthor: async (call: IServerCall) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getBooksViaAuthorHandler);
            wrappedHandler(call).then(_ => _);
        },
        getGreatestBook: async (call: IServerCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getGreatestBookHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
        getBooks: async (call: IServerCall) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getBooksHandler);
            wrappedHandler(call).then(_ => _);
        },
    });

    app.server.addService(TestServiceService, {
        test: async (call: IServerCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(testHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
    });

};