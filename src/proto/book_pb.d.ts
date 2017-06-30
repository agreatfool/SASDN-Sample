// package: com.book
// file: book.proto

import * as jspb from "google-protobuf";

export class Book extends jspb.Message { 
    getIsbn(): number;
    setIsbn(value: number): void;

    getTitle(): string;
    setTitle(value: string): void;

    getAuthor(): string;
    setAuthor(value: string): void;


    hasMaincategory(): boolean;
    clearMaincategory(): void;
    getMaincategory(): BookCategory | undefined;
    setMaincategory(value: BookCategory): void;

    clearCategorylistList(): void;
    getCategorylistList(): Array<BookCategory>;
    setCategorylistList(value: Array<BookCategory>): void;
    addCategorylist(value?: BookCategory, index?: number): BookCategory;

    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): void;
    addTags(value: string, index?: number): string;


    getMapbookMap(): jspb.Map<string, Book>;
    clearMapbookMap(): void;


    getMapnameMap(): jspb.Map<number, string>;
    clearMapnameMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Book.AsObject;
    static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Book;
    static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
    export type AsObject = {
        isbn: number,
        title: string,
        author: string,
        maincategory?: BookCategory.AsObject,
        categorylistList: Array<BookCategory>,
        tagsList: Array<string>,

        mapbookMap: Array<[string, Book]>,

        mapnameMap: Array<[number, string]>,
    }
}

export class BookCategory extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getIsparent(): boolean;
    setIsparent(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BookCategory.AsObject;
    static toObject(includeInstance: boolean, msg: BookCategory): BookCategory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BookCategory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BookCategory;
    static deserializeBinaryFromReader(message: BookCategory, reader: jspb.BinaryReader): BookCategory;
}

export namespace BookCategory {
    export type AsObject = {
        id: number,
        name: string,
        isparent: boolean,
    }
}

export class BookMap extends jspb.Message { 
    getCount(): number;
    setCount(value: number): void;

    clearListList(): void;
    getListList(): Array<Book>;
    setListList(value: Array<Book>): void;
    addList(value?: Book, index?: number): Book;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BookMap.AsObject;
    static toObject(includeInstance: boolean, msg: BookMap): BookMap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BookMap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BookMap;
    static deserializeBinaryFromReader(message: BookMap, reader: jspb.BinaryReader): BookMap;
}

export namespace BookMap {
    export type AsObject = {
        count: number,
        listList: Array<Book>,
    }
}

export class GetBookRequest extends jspb.Message { 
    getIsbn(): number;
    setIsbn(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBookRequest): GetBookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBookRequest;
    static deserializeBinaryFromReader(message: GetBookRequest, reader: jspb.BinaryReader): GetBookRequest;
}

export namespace GetBookRequest {
    export type AsObject = {
        isbn: number,
    }
}

export class GetBookViaAuthorRequest extends jspb.Message { 
    getAuthor(): string;
    setAuthor(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBookViaAuthorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBookViaAuthorRequest): GetBookViaAuthorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBookViaAuthorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBookViaAuthorRequest;
    static deserializeBinaryFromReader(message: GetBookViaAuthorRequest, reader: jspb.BinaryReader): GetBookViaAuthorRequest;
}

export namespace GetBookViaAuthorRequest {
    export type AsObject = {
        author: string,
    }
}

export class UpdateBookRequest extends jspb.Message { 
    getIsbn(): string;
    setIsbn(value: string): void;


    hasBook(): boolean;
    clearBook(): void;
    getBook(): Book | undefined;
    setBook(value: Book): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateBookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateBookRequest): UpdateBookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateBookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateBookRequest;
    static deserializeBinaryFromReader(message: UpdateBookRequest, reader: jspb.BinaryReader): UpdateBookRequest;
}

export namespace UpdateBookRequest {
    export type AsObject = {
        isbn: string,
        book?: Book.AsObject,
    }
}
