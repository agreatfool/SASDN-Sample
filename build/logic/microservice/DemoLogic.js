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
const demo_pb_1 = require("../../proto/demo/demo_pb");
var DemoLogic;
(function (DemoLogic) {
    function getDemo(request, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = new demo_pb_1.DemoCategory();
            category.setId(1024);
            category.setName('CategoryName');
            category.setParentNode(true);
            const demo = new demo_pb_1.Demo();
            const writersMap = demo.getWritersMap();
            const ordersMap = demo.getOrdersMap();
            const tagsList = [];
            const itemList = [];
            for (let i = 0; i < 4; i++) {
                tagsList.push(`tag${i}`);
            }
            for (let i = 0; i < 3; i++) {
                const item = new demo_pb_1.DemoItem();
                item.setId(1000 + i);
                item.setName(`ItemName${i}`);
                itemList.push(item);
            }
            for (let i = 0; i < 2; i++) {
                writersMap.set(i, `writeName${i}`);
            }
            demo.setId(request.getId());
            demo.setName('DemoName');
            demo.setCategory(category);
            demo.setTagsList(tagsList);
            demo.setItemsList(itemList);
            return Promise.resolve(demo);
        });
    }
    DemoLogic.getDemo = getDemo;
    function getDemoViaAuthor(request, call, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 1; i <= 10; i++) {
                const reply = new demo_pb_1.Demo();
                reply.setId(1000 + i);
                reply.setName(`DemoReply_${request.getName()}`);
                call.write(reply);
                console.log(`[MicroService] getDemoViaAuthorHandler, reply: ${JSON.stringify(reply.toObject())}`);
            }
            return Promise.resolve();
        });
    }
    DemoLogic.getDemoViaAuthor = getDemoViaAuthor;
    function getStreamDemo(call, ctx) {
        return new Promise((resolve) => {
            let lastRequest;
            call.on('data', (request) => {
                console.log(`[MicroService] getStreamDemoHandler, request: ${JSON.stringify(request.toObject())}`);
                lastRequest = request;
            });
            call.on('end', () => {
                const reply = new demo_pb_1.Demo();
                reply.setId(lastRequest.getId());
                reply.setName(`DemoReply_${lastRequest.getId()}`);
                resolve(reply);
            });
        });
    }
    DemoLogic.getStreamDemo = getStreamDemo;
    function getStreamDemos(call, ctx) {
        return new Promise((resolve) => {
            call.on('data', (request) => {
                console.log(`[MicroService] getStreamDemosHandler, request: ${JSON.stringify(request.toObject())}`);
                let reply = new demo_pb_1.Demo();
                reply.setId(request.getId());
                reply.setName(`DemoReply_${request.getId()}`);
                call.write(reply);
                console.log(`[MicroService] getDemoViaAuthorHandler, reply: ${JSON.stringify(reply.toObject())}`);
            });
            call.on('end', () => {
                resolve();
            });
        });
    }
    DemoLogic.getStreamDemos = getStreamDemos;
})(DemoLogic = exports.DemoLogic || (exports.DemoLogic = {}));
//# sourceMappingURL=DemoLogic.js.map