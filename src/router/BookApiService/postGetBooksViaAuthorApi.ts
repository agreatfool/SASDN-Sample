import {GatewayApiBase, GatewayContext, MiddlewareNext} from "sasdn";
import {BookMap, GetBookViaAuthorRequest} from "../../proto/book_pb";

interface RequestParams {
    body: GetBookViaAuthorRequest.AsObject
}

class PostGetBooksViaAuthorApi extends GatewayApiBase {
    constructor() {
        super();
        this.method = 'post';
        this.uri = '/v1/getBooksViaAuthor';
        this.type = 'application/json; charset=utf-8';
        this.schemaDefObj = {
            body: {
                type: 'object',
                required: true,
                schema: {
                    author: {
                        type: 'string',
                        required: false,
                    },
                },
            },
        };
    }

    public async handle(ctx: GatewayContext, next: MiddlewareNext, params: RequestParams): Promise<BookMap.AsObject> {
        return await new BookMap().toObject();
    }
}

export default new PostGetBooksViaAuthorApi();