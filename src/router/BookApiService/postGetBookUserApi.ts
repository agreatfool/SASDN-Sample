import {GatewayApiBase, GatewayContext, MiddlewareNext} from "sasdn";
import {Book, } from "../../proto/bookPb/book_pb";
import {GetUserRequest, } from "../../proto/userPb/user_pb";

interface RequestParams {
    id: string;
    body: GetUserRequest.AsObject;
}

class PostGetBookUserApi extends GatewayApiBase {
    constructor() {
        super();
        this.method = 'post';
        this.uri = '/v1/getBookUser/:id';
        this.type = 'application/json; charset=utf-8';
        this.schemaDefObj = {
            id: {
                type: 'string',
                required: true,
            },
            body: {
                type: 'object',
                required: true,
                schema: {
                    id: {
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

export const api = new PostGetBookUserApi();