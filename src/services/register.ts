///<reference path="../../node_modules/grpc-tsd/src/grpc.d.ts"/>
import {IServerCall, RpcImplCallback} from "grpc";
import {RpcApplication, WrappedHandler} from "sasdn";

import {
    BookServiceService,
    BookApiServiceService,
} from "../proto/bookPb/book_grpc_pb";
import {
    UserServiceService,
    UserApiServiceService,
} from "../proto/userPb/user_grpc_pb";


import {getBookHandler} from "./bookPb/book_grpc_pb/BookService/getBook";
import {getBooksViaAuthorHandler} from "./bookPb/book_grpc_pb/BookService/getBooksViaAuthor";
import {getGreatestBookHandler} from "./bookPb/book_grpc_pb/BookService/getGreatestBook";
import {getBooksHandler} from "./bookPb/book_grpc_pb/BookService/getBooks";

import {getBookApiHandler} from "./bookPb/book_grpc_pb/BookApiService/getBookApi";
import {getBooksViaAuthorApiHandler} from "./bookPb/book_grpc_pb/BookApiService/getBooksViaAuthorApi";
import {updateBooksApiHandler} from "./bookPb/book_grpc_pb/BookApiService/updateBooksApi";
import {getBookUserApiHandler} from "./bookPb/book_grpc_pb/BookApiService/getBookUserApi";


import {getUserHandler} from "./userPb/user_grpc_pb/UserService/getUser";

import {getUserApiHandler} from "./userPb/user_grpc_pb/UserApiService/getUserApi";

export const registerServices = function (app: RpcApplication) {

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

    app.server.addService(BookApiServiceService, {
        getBookApi: async (call: IServerCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getBookApiHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
        getBooksViaAuthorApi: async (call: IServerCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getBooksViaAuthorApiHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
        updateBooksApi: async (call: IServerCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(updateBooksApiHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
        getBookUserApi: async (call: IServerCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getBookUserApiHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
    });

    app.server.addService(UserServiceService, {
        getUser: async (call: IServerCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getUserHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
    });

    app.server.addService(UserApiServiceService, {
        getUserApi: async (call: IServerCall, callback: RpcImplCallback) => {
            let wrappedHandler: WrappedHandler = app.wrapGrpcHandler(getUserApiHandler);
            wrappedHandler(call, callback).then(_ => _);
        },
    });

};