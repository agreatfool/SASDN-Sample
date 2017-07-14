// package: userPb
// file: userPb/user.proto

import * as grpc from "grpc";
import * as userPb_user_pb from "../userPb/user_pb";

interface IUserServiceService extends grpc.IMethodsMap {
    getUser: IGetUser;
}

interface IGetUser {
    path: string; // "/userPb.UserService/GetUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: userPb_user_pb.GetUserRequest,
    responseType: userPb_user_pb.User,
    requestSerialize: (arg: userPb_user_pb.GetUserRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => userPb_user_pb.GetUserRequest;
    responseSerialize: (arg: userPb_user_pb.User) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => userPb_user_pb.User;
}

export const UserServiceService: IUserServiceService;
export class UserServiceClient extends grpc.Client {
    constructor(address: string, credentials: any, options?: grpc.IClientOptions);
    getUser(request: userPb_user_pb.GetUserRequest, callback: (error: Error | null, response: userPb_user_pb.User) => void): grpc.ClientUnaryCall;
}

interface IUserApiServiceService extends grpc.IMethodsMap {
    getUserApi: IGetUserApi;
}

interface IGetUserApi {
    path: string; // "/userPb.UserApiService/GetUserApi"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: userPb_user_pb.GetUserRequest,
    responseType: userPb_user_pb.User,
    requestSerialize: (arg: userPb_user_pb.GetUserRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => userPb_user_pb.GetUserRequest;
    responseSerialize: (arg: userPb_user_pb.User) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => userPb_user_pb.User;
}

export const UserApiServiceService: IUserApiServiceService;
export class UserApiServiceClient extends grpc.Client {
    constructor(address: string, credentials: any, options?: grpc.IClientOptions);
    getUserApi(request: userPb_user_pb.GetUserRequest, callback: (error: Error | null, response: userPb_user_pb.User) => void): grpc.ClientUnaryCall;
}
