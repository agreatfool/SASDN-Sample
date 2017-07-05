import {GatewayApiBase, GatewayContext, MiddlewareNext} from "sasdn";
import {User, GetUserRequest, } from "../../proto/userPb/user_pb";

interface RequestParams {
    id: string;
    body: GetUserRequest.AsObject;
}

class PostGetUserApi extends GatewayApiBase {
    constructor() {
        super();
        this.method = 'post';
        this.uri = '/v1/getUser/:id';
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

    public async handle(ctx: GatewayContext, next: MiddlewareNext, params: RequestParams): Promise<User.AsObject> {
        return await new User().toObject();
    }
}

export const api = new PostGetUserApi();