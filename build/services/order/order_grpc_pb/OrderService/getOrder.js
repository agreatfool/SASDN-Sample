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
const OrderLogic_1 = require("../../../../logic/microservice/OrderLogic");
exports.getOrderHandler = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    let call = ctx.call;
    let callback = ctx.callback;
    let request = call.request;
    console.log(`[MicroService] getOrderHandler, request: ${JSON.stringify(request.toObject())}`);
    let order = yield OrderLogic_1.OrderLogic.getOrder(request);
    console.log(`[MicroService] getorderHandler, response: ${JSON.stringify(order.toObject())}`);
    callback(null, order);
    return Promise.resolve();
});
//# sourceMappingURL=getOrder.js.map