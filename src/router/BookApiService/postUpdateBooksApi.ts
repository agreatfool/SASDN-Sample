import {GatewayApiBase, GatewayContext, MiddlewareNext} from "sasdn";
import {Book, UpdateBookRequest, } from "../../proto/bookPb/book_pb";

interface RequestParams {
    isbn: string;
    body: UpdateBookRequest.AsObject;
}

class PostUpdateBooksApi extends GatewayApiBase {
    constructor() {
        super();
        this.method = 'post';
        this.uri = '/v1/updateBook/:isbn';
        this.type = 'application/json; charset=utf-8';
        this.schemaDefObj = {
            isbn: {
                type: 'string',
                required: true,
            },
            body: {
                type: 'object',
                required: true,
                schema: {
                    isbn: {
                        type: 'string',
                        required: false,
                    },
                    book: {
                        type: 'object',
                        required: false,
                        schema: {
                            isbn: {
                                type: 'string',
                                required: false,
                            },
                            title: {
                                type: 'string',
                                required: false,
                            },
                            author: {
                                type: 'string',
                                required: false,
                            },
                            mainCategory: {
                                type: 'object',
                                required: false,
                                schema: {
                                    id: {
                                        type: 'string',
                                        required: false,
                                    },
                                    name: {
                                        type: 'string',
                                        required: false,
                                    },
                                    isParent: {
                                        type: 'boolean',
                                        required: false,
                                    },
                                },
                            },
                            categoryList: {
                                type: 'array',
                                required: false,
                            },
                            tags: {
                                type: 'array',
                                required: false,
                            },
                            mapBook: {
                                type: 'array',
                                required: false,
                            },
                            mapName: {
                                type: 'array',
                                required: false,
                            },
                        },
                    },
                },
            },
        };
    }

    public async handle(ctx: GatewayContext, next: MiddlewareNext, params: RequestParams): Promise<Book.AsObject> {
        return await new Book().toObject();
    }
}

export const api = new PostUpdateBooksApi();