"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sasdn_1 = require("sasdn");
const OrderLogic_1 = require("../../../logic/gateway/OrderLogic");
class PostGetDemoOrderApi extends sasdn_1.GatewayApiBase {
    constructor() {
        super();
        this.method = 'post';
        this.uri = '/v1/getDemoOrder';
        this.type = 'application/json; charset=utf-8';
        this.schemaDefObj = {
            body: {
                type: 'object',
                required: true,
                schema: {
                    order_id: {
                        type: 'string',
                        required: false,
                    },
                },
            },
        };
    }
    handle(ctx, next, params) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`[Gateway] /v1/getDemoOrder, params: ${JSON.stringify(params)}`);
            let orderObj = (yield OrderLogic_1.OrderLogic.getOrder(ctx, next, params)).toObject();
            console.log(`[Gateway] /v1/getDemoOrder, response: ${JSON.stringify(orderObj)}`);
            return Promise.resolve(orderObj);
        });
    }
}
exports.api = new PostGetDemoOrderApi();
//# sourceMappingURL=postGetDemoOrderApi.js.map