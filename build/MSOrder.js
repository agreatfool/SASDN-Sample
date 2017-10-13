"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MSOrder_1 = require("./sample/MSOrder");
const server = new MSOrder_1.default();
server.init(process.env.NODE_ENV === 'development')
    .then(() => {
    server.start();
})
    .catch((err) => {
    console.log(err.message);
});
process.on('unhandledRejection', function (reason, p) {
    console.log('Unhandled Rejection at:', p, 'reason:', reason);
});
//# sourceMappingURL=MSOrder.js.map