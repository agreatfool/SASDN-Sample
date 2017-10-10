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
var OrderLogic;
(function (OrderLogic) {
    function getOrder(request, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = new order_pb_1.Order();
            order.setOrderId(request.getOrderId());
            order.setUserId('dummyUserId');
            order.setPrice('2000');
            order.setIspayed(true);
            order.getItemsMap()
                .set(1, 'item4')
                .set(2, 'item5')
                .set(3, 'item6');
            // Some async logic maybe ...
            return Promise.resolve(order);
        });
    }
    OrderLogic.getOrder = getOrder;
})(OrderLogic = exports.OrderLogic || (exports.OrderLogic = {}));
//# sourceMappingURL=OrderLogic.js.map