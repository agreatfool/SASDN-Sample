// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var userPb_user_pb = require('../userPb/user_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_userPb_GetUserRequest(arg) {
  if (!(arg instanceof userPb_user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type userPb.GetUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_userPb_GetUserRequest(buffer_arg) {
  return userPb_user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userPb_User(arg) {
  if (!(arg instanceof userPb_user_pb.User)) {
    throw new Error('Expected argument of type userPb.User');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_userPb_User(buffer_arg) {
  return userPb_user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUser: {
    path: '/userPb.UserService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: userPb_user_pb.GetUserRequest,
    responseType: userPb_user_pb.User,
    requestSerialize: serialize_userPb_GetUserRequest,
    requestDeserialize: deserialize_userPb_GetUserRequest,
    responseSerialize: serialize_userPb_User,
    responseDeserialize: deserialize_userPb_User,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
// gPRC-getway Test
var UserApiServiceService = exports.UserApiServiceService = {
  getUserApi: {
    path: '/userPb.UserApiService/GetUserApi',
    requestStream: false,
    responseStream: false,
    requestType: userPb_user_pb.GetUserRequest,
    responseType: userPb_user_pb.User,
    requestSerialize: serialize_userPb_GetUserRequest,
    requestDeserialize: deserialize_userPb_GetUserRequest,
    responseSerialize: serialize_userPb_User,
    responseDeserialize: deserialize_userPb_User,
  },
};

exports.UserApiServiceClient = grpc.makeGenericClientConstructor(UserApiServiceService);
