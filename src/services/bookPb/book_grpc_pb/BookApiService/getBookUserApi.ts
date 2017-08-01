import {ServerUnaryCall, RpcImplCallback} from "grpc";
import {RpcContext, RpcMiddleware, MiddlewareNext} from "sasdn";
import {GetUserRequest, } from "../../../../proto/userPb/user_pb";
import {Book, } from "../../../../proto/bookPb/book_pb";

export const getBookUserApiHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call: ServerUnaryCall = ctx.call as ServerUnaryCall;
    let callback: RpcImplCallback = ctx.callback;
    let request = call.request as GetUserRequest;

    await next();

    return Promise.resolve();
};