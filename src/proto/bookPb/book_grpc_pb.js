// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var bookPb_book_pb = require('../bookPb/book_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var userPb_user_pb = require('../userPb/user_pb.js');

function serialize_bookPb_Book(arg) {
  if (!(arg instanceof bookPb_book_pb.Book)) {
    throw new Error('Expected argument of type bookPb.Book');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_bookPb_Book(buffer_arg) {
  return bookPb_book_pb.Book.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bookPb_BookMap(arg) {
  if (!(arg instanceof bookPb_book_pb.BookMap)) {
    throw new Error('Expected argument of type bookPb.BookMap');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_bookPb_BookMap(buffer_arg) {
  return bookPb_book_pb.BookMap.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bookPb_GetBookRequest(arg) {
  if (!(arg instanceof bookPb_book_pb.GetBookRequest)) {
    throw new Error('Expected argument of type bookPb.GetBookRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_bookPb_GetBookRequest(buffer_arg) {
  return bookPb_book_pb.GetBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bookPb_GetBookViaAuthorRequest(arg) {
  if (!(arg instanceof bookPb_book_pb.GetBookViaAuthorRequest)) {
    throw new Error('Expected argument of type bookPb.GetBookViaAuthorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_bookPb_GetBookViaAuthorRequest(buffer_arg) {
  return bookPb_book_pb.GetBookViaAuthorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bookPb_UpdateBookRequest(arg) {
  if (!(arg instanceof bookPb_book_pb.UpdateBookRequest)) {
    throw new Error('Expected argument of type bookPb.UpdateBookRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_bookPb_UpdateBookRequest(buffer_arg) {
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
    path: '/bookPb.BookService/GetBook',
    requestStream: false,
    responseStream: false,
    requestType: bookPb_book_pb.GetBookRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: serialize_bookPb_GetBookRequest,
    requestDeserialize: deserialize_bookPb_GetBookRequest,
    responseSerialize: serialize_bookPb_Book,
    responseDeserialize: deserialize_bookPb_Book,
  },
  getBooksViaAuthor: {
    path: '/bookPb.BookService/GetBooksViaAuthor',
    requestStream: false,
    responseStream: true,
    requestType: bookPb_book_pb.GetBookViaAuthorRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: serialize_bookPb_GetBookViaAuthorRequest,
    requestDeserialize: deserialize_bookPb_GetBookViaAuthorRequest,
    responseSerialize: serialize_bookPb_Book,
    responseDeserialize: deserialize_bookPb_Book,
  },
  getGreatestBook: {
    path: '/bookPb.BookService/GetGreatestBook',
    requestStream: true,
    responseStream: false,
    requestType: bookPb_book_pb.GetBookRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: serialize_bookPb_GetBookRequest,
    requestDeserialize: deserialize_bookPb_GetBookRequest,
    responseSerialize: serialize_bookPb_Book,
    responseDeserialize: deserialize_bookPb_Book,
  },
  getBooks: {
    path: '/bookPb.BookService/GetBooks',
    requestStream: true,
    responseStream: true,
    requestType: bookPb_book_pb.GetBookRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: serialize_bookPb_GetBookRequest,
    requestDeserialize: deserialize_bookPb_GetBookRequest,
    responseSerialize: serialize_bookPb_Book,
    responseDeserialize: deserialize_bookPb_Book,
  },
};

exports.BookServiceClient = grpc.makeGenericClientConstructor(BookServiceService);
// gPRC-getway Test
var BookApiServiceService = exports.BookApiServiceService = {
  getBookApi: {
    path: '/bookPb.BookApiService/GetBookApi',
    requestStream: false,
    responseStream: false,
    requestType: bookPb_book_pb.GetBookRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: serialize_bookPb_GetBookRequest,
    requestDeserialize: deserialize_bookPb_GetBookRequest,
    responseSerialize: serialize_bookPb_Book,
    responseDeserialize: deserialize_bookPb_Book,
  },
  getBooksViaAuthorApi: {
    path: '/bookPb.BookApiService/GetBooksViaAuthorApi',
    requestStream: false,
    responseStream: false,
    requestType: bookPb_book_pb.GetBookViaAuthorRequest,
    responseType: bookPb_book_pb.BookMap,
    requestSerialize: serialize_bookPb_GetBookViaAuthorRequest,
    requestDeserialize: deserialize_bookPb_GetBookViaAuthorRequest,
    responseSerialize: serialize_bookPb_BookMap,
    responseDeserialize: deserialize_bookPb_BookMap,
  },
  updateBooksApi: {
    path: '/bookPb.BookApiService/UpdateBooksApi',
    requestStream: false,
    responseStream: false,
    requestType: bookPb_book_pb.UpdateBookRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: serialize_bookPb_UpdateBookRequest,
    requestDeserialize: deserialize_bookPb_UpdateBookRequest,
    responseSerialize: serialize_bookPb_Book,
    responseDeserialize: deserialize_bookPb_Book,
  },
  getBookUserApi: {
    path: '/bookPb.BookApiService/GetBookUserApi',
    requestStream: false,
    responseStream: false,
    requestType: userPb_user_pb.GetUserRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: serialize_userPb_GetUserRequest,
    requestDeserialize: deserialize_userPb_GetUserRequest,
    responseSerialize: serialize_bookPb_Book,
    responseDeserialize: deserialize_bookPb_Book,
  },
};

exports.BookApiServiceClient = grpc.makeGenericClientConstructor(BookApiServiceService);
