"use strict";

import {GatewayApiBase, GatewayContext, MiddlewareNext} from 'sasdn';
import {Book} from "../../proto/book_pb";

interface RequestParams {
    body: {
        isbn?: string,
    },
}

class PostGetBookApi extends GatewayApiBase {
    constructor() {
        super();
        this.method = 'post';
        this.uri = '/v1/getBook';
        this.type = 'application/json; charset=utf-8';
        this.schemaDefObj = {
            body: {
                type: 'object',
                required: true,
                schema: {
                    isbn: {
                        type: 'string',
                        required: false,
                    },
                },
            },
        };
    }

    public async handle(ctx: GatewayContext, next: MiddlewareNext, params: RequestParams): Promise<Book.AsObject> {
        return await new Book().toObject();
    }
}

export default new PostGetBookApi();