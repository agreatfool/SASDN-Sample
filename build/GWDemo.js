"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GWDemo_1 = require("./sample/GWDemo");
const server = new GWDemo_1.default();
server.init(process.env.NODE_ENV === 'development')
    .then(() => {
    server.start();
})
    .catch((err) => {
    console.log(err);
});
process.on('unhandledRejection', function (reason, p) {
    console.log('Unhandled Rejection at:', p, 'reason:', reason);
});
//# sourceMappingURL=GWDemo.js.map