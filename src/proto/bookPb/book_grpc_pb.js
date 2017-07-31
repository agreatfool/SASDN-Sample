// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var bookPb_book_pb = require('../bookPb/book_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var userPb_user_pb = require('../userPb/user_pb.js');

function serialize_booksPb_Book(arg) {
  if (!(arg instanceof bookPb_book_pb.Book)) {
    throw new Error('Expected argument of type booksPb.Book');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_booksPb_Book(buffer_arg) {
  return bookPb_book_pb.Book.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_booksPb_BookMap(arg) {
  if (!(arg instanceof bookPb_book_pb.BookMap)) {
    throw new Error('Expected argument of type booksPb.BookMap');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_booksPb_BookMap(buffer_arg) {
  return bookPb_book_pb.BookMap.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_booksPb_GetBookRequest(arg) {
  if (!(arg instanceof bookPb_book_pb.GetBookRequest)) {
    throw new Error('Expected argument of type booksPb.GetBookRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_booksPb_GetBookRequest(buffer_arg) {
  return bookPb_book_pb.GetBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_booksPb_GetBookViaAuthorRequest(arg) {
  if (!(arg instanceof bookPb_book_pb.GetBookViaAuthorRequest)) {
    throw new Error('Expected argument of type booksPb.GetBookViaAuthorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_booksPb_GetBookViaAuthorRequest(buffer_arg) {
  return bookPb_book_pb.GetBookViaAuthorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_booksPb_UpdateBookRequest(arg) {
  if (!(arg instanceof bookPb_book_pb.UpdateBookRequest)) {
    throw new Error('Expected argument of type booksPb.UpdateBookRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_booksPb_UpdateBookRequest(buffer_arg) {
  return bookPb_book_pb.UpdateBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userPb_GetUserRequest(arg) {
  if (!(arg instanceof userPb_user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type userPb.GetUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_userPb_GetUserRequest(buffer_arg) {
  return userPb_user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var BookServiceService = exports.BookServiceService = {
  getBook: {
    path: '/booksPb.BookService/GetBook',
    requestStream: false,
    responseStream: false,
    requestType: bookPb_book_pb.GetBookRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: serialize_booksPb_GetBookRequest,
    requestDeserialize: deserialize_booksPb_GetBookRequest,
    responseSerialize: serialize_booksPb_Book,
    responseDeserialize: deserialize_booksPb_Book,
  },
  getBooksViaAuthor: {
    path: '/booksPb.BookService/GetBooksViaAuthor',
    requestStream: false,
    responseStream: true,
    requestType: bookPb_book_pb.GetBookViaAuthorRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: serialize_booksPb_GetBookViaAuthorRequest,
    requestDeserialize: deserialize_booksPb_GetBookViaAuthorRequest,
    responseSerialize: serialize_booksPb_Book,
    responseDeserialize: deserialize_booksPb_Book,
  },
  getGreatestBook: {
    path: '/booksPb.BookService/GetGreatestBook',
    requestStream: true,
    responseStream: false,
    requestType: bookPb_book_pb.GetBookRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: serialize_booksPb_GetBookRequest,
    requestDeserialize: deserialize_booksPb_GetBookRequest,
    responseSerialize: serialize_booksPb_Book,
    responseDeserialize: deserialize_booksPb_Book,
  },
  getBooks: {
    path: '/booksPb.BookService/GetBooks',
    requestStream: true,
    responseStream: true,
    requestType: bookPb_book_pb.GetBookRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: serialize_booksPb_GetBookRequest,
    requestDeserialize: deserialize_booksPb_GetBookRequest,
    responseSerialize: serialize_booksPb_Book,
    responseDeserialize: deserialize_booksPb_Book,
  },
};

exports.BookServiceClient = grpc.makeGenericClientConstructor(BookServiceService);
// gPRC-getway Test
var BookApiServiceService = exports.BookApiServiceService = {
  getBookApi: {
    path: '/booksPb.BookApiService/GetBookApi',
    requestStream: false,
    responseStream: false,
    requestType: bookPb_book_pb.GetBookRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: serialize_booksPb_GetBookRequest,
    requestDeserialize: deserialize_booksPb_GetBookRequest,
    responseSerialize: serialize_booksPb_Book,
    responseDeserialize: deserialize_booksPb_Book,
  },
  getBooksViaAuthorApi: {
    path: '/booksPb.BookApiService/GetBooksViaAuthorApi',
    requestStream: false,
    responseStream: false,
    requestType: bookPb_book_pb.GetBookViaAuthorRequest,
    responseType: bookPb_book_pb.BookMap,
    requestSerialize: serialize_booksPb_GetBookViaAuthorRequest,
    requestDeserialize: deserialize_booksPb_GetBookViaAuthorRequest,
    responseSerialize: serialize_booksPb_BookMap,
    responseDeserialize: deserialize_booksPb_BookMap,
  },
  updateBooksApi: {
    path: '/booksPb.BookApiService/UpdateBooksApi',
    requestStream: false,
    responseStream: false,
    requestType: bookPb_book_pb.UpdateBookRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: serialize_booksPb_UpdateBookRequest,
    requestDeserialize: deserialize_booksPb_UpdateBookRequest,
    responseSerialize: serialize_booksPb_Book,
    responseDeserialize: deserialize_booksPb_Book,
  },
  getBookUserApi: {
    path: '/booksPb.BookApiService/GetBookUserApi',
    requestStream: false,
    responseStream: false,
    requestType: userPb_user_pb.GetUserRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: serialize_userPb_GetUserRequest,
    requestDeserialize: deserialize_userPb_GetUserRequest,
    responseSerialize: serialize_booksPb_Book,
    responseDeserialize: deserialize_booksPb_Book,
  },
};

exports.BookApiServiceClient = grpc.makeGenericClientConstructor(BookApiServiceService);
