import {ServerUnaryCall, RpcImplCallback} from "grpc";
import {RpcContext, RpcMiddleware, MiddlewareNext} from "sasdn";
import {GetUserRequest, User, } from "../../../../proto/userPb/user_pb";

export const getUserHandler: RpcMiddleware = async (ctx: RpcContext, next: MiddlewareNext) => {
    let call: ServerUnaryCall = ctx.call as ServerUnaryCall;
    let callback: RpcImplCallback = ctx.callback;
    let request = call.request as GetUserRequest;

    await next();

    return Promise.resolve();
};