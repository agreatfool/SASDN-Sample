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
const DemoLogic_1 = require("../../../../logic/microservice/DemoLogic");
exports.getStreamDemoHandler = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    let call = ctx.call;
    let callback = ctx.callback;
    console.log(`[MicroService] getStreamDemoHandler start`);
    const response = yield DemoLogic_1.DemoLogic.getStreamDemo(call, ctx);
    console.log(`[MicroService] getStreamDemoHandler done`);
    callback(null, response);
    return Promise.resolve();
});
//# sourceMappingURL=getStreamDemo.js.map