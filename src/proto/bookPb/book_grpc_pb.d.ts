// package: booksPb
// file: bookPb/book.proto

import * as grpc from "grpc";
import * as bookPb_book_pb from "../bookPb/book_pb";
import * as userPb_user_pb from "../userPb/user_pb";

interface IBookServiceService extends grpc.IMethodsMap {
    getBook: IGetBook;
    getBooksViaAuthor: IGetBooksViaAuthor;
    getGreatestBook: IGetGreatestBook;
    getBooks: IGetBooks;
}

interface IGetBook {
    path: string; // "/booksPb.BookService/GetBook"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: bookPb_book_pb.GetBookRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: (arg: bookPb_book_pb.GetBookRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => bookPb_book_pb.GetBookRequest;
    responseSerialize: (arg: bookPb_book_pb.Book) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => bookPb_book_pb.Book;
}
interface IGetBooksViaAuthor {
    path: string; // "/booksPb.BookService/GetBooksViaAuthor"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestType: bookPb_book_pb.GetBookViaAuthorRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: (arg: bookPb_book_pb.GetBookViaAuthorRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => bookPb_book_pb.GetBookViaAuthorRequest;
    responseSerialize: (arg: bookPb_book_pb.Book) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => bookPb_book_pb.Book;
}
interface IGetGreatestBook {
    path: string; // "/booksPb.BookService/GetGreatestBook"
    requestStream: boolean; // true
    responseStream: boolean; // false
    requestType: bookPb_book_pb.GetBookRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: (arg: bookPb_book_pb.GetBookRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => bookPb_book_pb.GetBookRequest;
    responseSerialize: (arg: bookPb_book_pb.Book) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => bookPb_book_pb.Book;
}
interface IGetBooks {
    path: string; // "/booksPb.BookService/GetBooks"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestType: bookPb_book_pb.GetBookRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: (arg: bookPb_book_pb.GetBookRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => bookPb_book_pb.GetBookRequest;
    responseSerialize: (arg: bookPb_book_pb.Book) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => bookPb_book_pb.Book;
}

export const BookServiceService: IBookServiceService;
export class BookServiceClient extends grpc.Client {
    constructor(address: string, credentials: any, options?: grpc.IClientOptions);
    getBook(request: bookPb_book_pb.GetBookRequest, callback: (error: Error | null, response: bookPb_book_pb.Book) => void): grpc.ClientUnaryCall;
    getBooksViaAuthor(request: bookPb_book_pb.GetBookViaAuthorRequest): grpc.ClientReadableStream;
    getGreatestBook(callback: (error: Error | null, response: bookPb_book_pb.Book) => void): grpc.ClientWritableStream;
    getBooks(): grpc.ClientDuplexStream;
}

interface IBookApiServiceService extends grpc.IMethodsMap {
    getBookApi: IGetBookApi;
    getBooksViaAuthorApi: IGetBooksViaAuthorApi;
    updateBooksApi: IUpdateBooksApi;
    getBookUserApi: IGetBookUserApi;
}

interface IGetBookApi {
    path: string; // "/booksPb.BookApiService/GetBookApi"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: bookPb_book_pb.GetBookRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: (arg: bookPb_book_pb.GetBookRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => bookPb_book_pb.GetBookRequest;
    responseSerialize: (arg: bookPb_book_pb.Book) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => bookPb_book_pb.Book;
}
interface IGetBooksViaAuthorApi {
    path: string; // "/booksPb.BookApiService/GetBooksViaAuthorApi"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: bookPb_book_pb.GetBookViaAuthorRequest,
    responseType: bookPb_book_pb.BookMap,
    requestSerialize: (arg: bookPb_book_pb.GetBookViaAuthorRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => bookPb_book_pb.GetBookViaAuthorRequest;
    responseSerialize: (arg: bookPb_book_pb.BookMap) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => bookPb_book_pb.BookMap;
}
interface IUpdateBooksApi {
    path: string; // "/booksPb.BookApiService/UpdateBooksApi"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: bookPb_book_pb.UpdateBookRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: (arg: bookPb_book_pb.UpdateBookRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => bookPb_book_pb.UpdateBookRequest;
    responseSerialize: (arg: bookPb_book_pb.Book) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => bookPb_book_pb.Book;
}
interface IGetBookUserApi {
    path: string; // "/booksPb.BookApiService/GetBookUserApi"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: userPb_user_pb.GetUserRequest,
    responseType: bookPb_book_pb.Book,
    requestSerialize: (arg: userPb_user_pb.GetUserRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => userPb_user_pb.GetUserRequest;
    responseSerialize: (arg: bookPb_book_pb.Book) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => bookPb_book_pb.Book;
}

export const BookApiServiceService: IBookApiServiceService;
export class BookApiServiceClient extends grpc.Client {
    constructor(address: string, credentials: any, options?: grpc.IClientOptions);
    getBookApi(request: bookPb_book_pb.GetBookRequest, callback: (error: Error | null, response: bookPb_book_pb.Book) => void): grpc.ClientUnaryCall;
    getBooksViaAuthorApi(request: bookPb_book_pb.GetBookViaAuthorRequest, callback: (error: Error | null, response: bookPb_book_pb.BookMap) => void): grpc.ClientUnaryCall;
    updateBooksApi(request: bookPb_book_pb.UpdateBookRequest, callback: (error: Error | null, response: bookPb_book_pb.Book) => void): grpc.ClientUnaryCall;
    getBookUserApi(request: userPb_user_pb.GetUserRequest, callback: (error: Error | null, response: bookPb_book_pb.Book) => void): grpc.ClientUnaryCall;
}
