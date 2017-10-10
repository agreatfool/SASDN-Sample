import * as grpc from 'grpc';
import {Duplex, Readable, Writable} from "stream";

import {DemoServiceClient} from './proto/demo/demo_grpc_pb';
import {Demo, GetDemoRequest, GetDemoViaNameRequest} from "./proto/demo/demo_pb";

let client = new DemoServiceClient('127.0.0.1:9092', grpc.credentials.createInsecure());

function getDemo() {
    let request = new GetDemoRequest();
    request.setId(10086);
    client.getDemo(request, (err, response: Demo) => {
        if (err != null) {
            console.log(err);
            return;
        }

        console.log(`[MicroClient] getDemo, response: ${JSON.stringify(response.toObject())}`);
    });
}

function getDemoViaName() {
    let request = new GetDemoViaNameRequest();
    request.setName('SpecifiedName');

    let call = client.getDemoViaName(request) as Readable;
    call.on('data', (response: Demo) => {
        console.log(`[MicroClient] getBooksViaAuthor, response: ${JSON.stringify(response.toObject())}`);
    });
    call.on('end', () => {
        console.log(`[MicroClient] getBooksViaAuthor done`);
    });
}

function getStreamDemo() {
    let call: Writable = client.getStreamDemo((error, response: Demo) => {
        console.log(`[MicroClient] getStreamDemo, response: ${JSON.stringify(response.toObject())}`);
    });

    for (let i = 1; i <= 10; i++) {
        let request = new GetDemoRequest();
        request.setId(i);
        call.write(request);
    }

    call.end();
}

function getStreamDemos() {
    let call = client.getStreamDemos() as Duplex;
    call.on('data', (response: Demo) => {
        console.log(`[MicroClient] getStreamDemos, response: ${JSON.stringify(response.toObject())}`);
    });
    call.on('end', () => {
        console.log(`[MicroClient] getStreamDemos done`);
    });

    for (let i = 1; i <= 10; i++) {
        let request = new GetDemoRequest();
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