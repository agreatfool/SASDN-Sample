"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = require("grpc");
const demo_grpc_pb_1 = require("./proto/demo/demo_grpc_pb");
const demo_pb_1 = require("./proto/demo/demo_pb");
let client = new demo_grpc_pb_1.DemoServiceClient('127.0.0.1:9092', grpc.credentials.createInsecure());
function getDemo() {
    let request = new demo_pb_1.GetDemoRequest();
    request.setId(10086);
    client.getDemo(request, (err, response) => {
        if (err != null) {
            console.log(err);
            return;
        }
        console.log(`[MicroClient] getDemo, response: ${JSON.stringify(response.toObject())}`);
    });
}
function getDemoViaName() {
    let request = new demo_pb_1.GetDemoViaNameRequest();
    request.setName('SpecifiedName');
    let call = client.getDemoViaName(request);
    call.on('data', (response) => {
        console.log(`[MicroClient] getBooksViaAuthor, response: ${JSON.stringify(response.toObject())}`);
    });
    call.on('end', () => {
        console.log(`[MicroClient] getBooksViaAuthor done`);
    });
}
function getStreamDemo() {
    let call = client.getStreamDemo((error, response) => {
        console.log(`[MicroClient] getStreamDemo, response: ${JSON.stringify(response.toObject())}`);
    });
    for (let i = 1; i <= 10; i++) {
        let request = new demo_pb_1.GetDemoRequest();
        request.setId(i);
        call.write(request);
    }
    call.end();
}
function getStreamDemos() {
    let call = client.getStreamDemos();
    call.on('data', (response) => {
        console.log(`[MicroClient] getStreamDemos, response: ${JSON.stringify(response.toObject())}`);
    });
    call.on('end', () => {
        console.log(`[MicroClient] getStreamDemos done`);
    });
    for (let i = 1; i <= 10; i++) {
        let request = new demo_pb_1.GetDemoRequest();
        request.setId(i);
        call.write(request);
    }
    call.end();
}
function main() {
    getDemo();
    // getDemoViaName();
    // getStreamDemo();
    // getStreamDemos();
}
main();
//# sourceMappingURL=MSClient.js.map