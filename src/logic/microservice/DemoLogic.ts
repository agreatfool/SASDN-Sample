import {ServerWritableStream, ServerReadableStream, ServerDuplexStream} from 'grpc';
import {RpcContext} from 'sasdn';
import {GetDemoRequest, GetDemoViaNameRequest, Demo, DemoCategory, DemoItem} from '../../proto/demo/demo_pb';

export namespace DemoLogic {

    export async function getDemo(request: GetDemoRequest, ctx?: RpcContext): Promise<Demo> {
        const category = new DemoCategory();
        category.setId(1024);
        category.setName('CategoryName');
        category.setParentNode(true);

        const demo = new Demo();

        const writersMap = demo.getWritersMap();
        const ordersMap = demo.getOrdersMap();
        const tagsList: string[] = [];
        const itemList: DemoItem[] = [];

        for (let i = 0; i < 4; i++) {
            tagsList.push(`tag${i}`);
        }

        for (let i = 0; i < 3; i++) {
            const item = new DemoItem();
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
    }

    export async function getDemoViaAuthor(request: GetDemoViaNameRequest, call: ServerWritableStream, ctx?: RpcContext): Promise<void> {
        for (let i = 1; i <= 10; i++) {
            const reply = new Demo();
            reply.setId(1000 + i);
            reply.setName(`DemoReply_${request.getName()}`);
            call.write(reply);
            console.log(`[MicroService] getDemoViaAuthorHandler, reply: ${JSON.stringify(reply.toObject())}`);
        }

        return Promise.resolve();
    }

    export function getStreamDemo(call: ServerReadableStream, ctx?: RpcContext): Promise<Demo> {

        return new Promise((resolve) => {
            let lastRequest: GetDemoRequest;
            call.on('data', (request: GetDemoRequest) => {
                console.log(`[MicroService] getStreamDemoHandler, request: ${JSON.stringify(request.toObject())}`);
                lastRequest = request;
            });

            call.on('end', () => {
                const reply = new Demo();
                reply.setId(lastRequest.getId());
                reply.setName(`DemoReply_${lastRequest.getId()}`);
                resolve(reply);
            });
        });
    }

    export function getStreamDemos(call: ServerDuplexStream, ctx?: RpcContext): Promise<void> {

        return new Promise((resolve) => {
            call.on('data', (request: GetDemoRequest) => {
                console.log(`[MicroService] getStreamDemosHandler, request: ${JSON.stringify(request.toObject())}`);
                let reply = new Demo();
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
}