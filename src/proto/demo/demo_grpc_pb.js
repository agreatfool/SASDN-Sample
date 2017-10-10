// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var demo_demo_pb = require('../demo/demo_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var order_order_pb = require('../order/order_pb.js');

function serialize_demo_Demo(arg) {
  if (!(arg instanceof demo_demo_pb.Demo)) {
    throw new Error('Expected argument of type demo.Demo');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_demo_Demo(buffer_arg) {
  return demo_demo_pb.Demo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_demo_GetDemoOrderRequest(arg) {
  if (!(arg instanceof demo_demo_pb.GetDemoOrderRequest)) {
    throw new Error('Expected argument of type demo.GetDemoOrderRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_demo_GetDemoOrderRequest(buffer_arg) {
  return demo_demo_pb.GetDemoOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_demo_GetDemoRequest(arg) {
  if (!(arg instanceof demo_demo_pb.GetDemoRequest)) {
    throw new Error('Expected argument of type demo.GetDemoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_demo_GetDemoRequest(buffer_arg) {
  return demo_demo_pb.GetDemoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_demo_GetDemoViaNameRequest(arg) {
  if (!(arg instanceof demo_demo_pb.GetDemoViaNameRequest)) {
    throw new Error('Expected argument of type demo.GetDemoViaNameRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_demo_GetDemoViaNameRequest(buffer_arg) {
  return demo_demo_pb.GetDemoViaNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_Order(arg) {
  if (!(arg instanceof order_order_pb.Order)) {
    throw new Error('Expected argument of type order.Order');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_order_Order(buffer_arg) {
  return order_order_pb.Order.deserializeBinary(new Uint8Array(buffer_arg));
}


var DemoServiceService = exports.DemoServiceService = {
  getDemo: {
    path: '/demo.DemoService/GetDemo',
    requestStream: false,
    responseStream: false,
    requestType: demo_demo_pb.GetDemoRequest,
    responseType: demo_demo_pb.Demo,
    requestSerialize: serialize_demo_GetDemoRequest,
    requestDeserialize: deserialize_demo_GetDemoRequest,
    responseSerialize: serialize_demo_Demo,
    responseDeserialize: deserialize_demo_Demo,
  },
  getDemoViaName: {
    path: '/demo.DemoService/GetDemoViaName',
    requestStream: false,
    responseStream: true,
    requestType: demo_demo_pb.GetDemoViaNameRequest,
    responseType: demo_demo_pb.Demo,
    requestSerialize: serialize_demo_GetDemoViaNameRequest,
    requestDeserialize: deserialize_demo_GetDemoViaNameRequest,
    responseSerialize: serialize_demo_Demo,
    responseDeserialize: deserialize_demo_Demo,
  },
  getStreamDemo: {
    path: '/demo.DemoService/GetStreamDemo',
    requestStream: true,
    responseStream: false,
    requestType: demo_demo_pb.GetDemoRequest,
    responseType: demo_demo_pb.Demo,
    requestSerialize: serialize_demo_GetDemoRequest,
    requestDeserialize: deserialize_demo_GetDemoRequest,
    responseSerialize: serialize_demo_Demo,
    responseDeserialize: deserialize_demo_Demo,
  },
  getStreamDemos: {
    path: '/demo.DemoService/GetStreamDemos',
    requestStream: true,
    responseStream: true,
    requestType: demo_demo_pb.GetDemoRequest,
    responseType: demo_demo_pb.Demo,
    requestSerialize: serialize_demo_GetDemoRequest,
    requestDeserialize: deserialize_demo_GetDemoRequest,
    responseSerialize: serialize_demo_Demo,
    responseDeserialize: deserialize_demo_Demo,
  },
};

exports.DemoServiceClient = grpc.makeGenericClientConstructor(DemoServiceService);
// gPRC-getway Test
var DemoApiServiceService = exports.DemoApiServiceService = {
  getDemoOrderApi: {
    path: '/demo.DemoApiService/GetDemoOrderApi',
    requestStream: false,
    responseStream: false,
    requestType: demo_demo_pb.GetDemoOrderRequest,
    responseType: order_order_pb.Order,
    requestSerialize: serialize_demo_GetDemoOrderRequest,
    requestDeserialize: deserialize_demo_GetDemoOrderRequest,
    responseSerialize: serialize_order_Order,
    responseDeserialize: deserialize_order_Order,
  },
};

exports.DemoApiServiceClient = grpc.makeGenericClientConstructor(DemoApiServiceService);
