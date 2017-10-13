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
const order_pb_1 = require("../../proto/order/order_pb");
const MSClientOrder_1 = require("../../sample/client/MSClientOrder");
var OrderLogic;
(function (OrderLogic) {
    function getOrder(ctx, next, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderId = params.body.orderId;
            if (!orderId) {
                throw new Error('Error: orderId is required!');
            }
            // build request params
            const request = new order_pb_1.GetOrderRequest();
            request.setOrderId(orderId);
            // connect && query
            const orderClient = new MSClientOrder_1.default(ctx);
            const order = yield orderClient.getOrder(request);
            // return
            return Promise.resolve(order);
        });
    }
    OrderLogic.getOrder = getOrder;
})(OrderLogic = exports.OrderLogic || (exports.OrderLogic = {}));
//# sourceMappingURL=OrderLogic.js.map