// package: demo
// file: demo/demo.proto

import * as jspb from "google-protobuf";
import * as order_order_pb from "../order/order_pb";

export class Demo extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;


    hasCategory(): boolean;
    clearCategory(): void;
    getCategory(): DemoCategory | undefined;
    setCategory(value?: DemoCategory): void;

    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): void;
    addTags(value: string, index?: number): string;

    clearItemsList(): void;
    getItemsList(): Array<DemoItem>;
    setItemsList(value: Array<DemoItem>): void;
    addItems(value?: DemoItem, index?: number): DemoItem;


    getWritersMap(): jspb.Map<number, string>;
    clearWritersMap(): void;


    getOrdersMap(): jspb.Map<string, order_order_pb.Order>;
    clearOrdersMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Demo.AsObject;
    static toObject(includeInstance: boolean, msg: Demo): Demo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Demo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Demo;
    static deserializeBinaryFromReader(message: Demo, reader: jspb.BinaryReader): Demo;
}

export namespace Demo {
    export type AsObject = {
        id: number,
        name: string,
        category?: DemoCategory.AsObject,
        tagsList: Array<string>,
        itemsList: Array<DemoItem.AsObject>,

        writersMap: Array<[number, string]>,

        ordersMap: Array<[string, order_order_pb.Order.AsObject]>,
    }
}

export class DemoItem extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DemoItem.AsObject;
    static toObject(includeInstance: boolean, msg: DemoItem): DemoItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DemoItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DemoItem;
    static deserializeBinaryFromReader(message: DemoItem, reader: jspb.BinaryReader): DemoItem;
}

export namespace DemoItem {
    export type AsObject = {
        id: number,
        name: string,
    }
}

export class DemoCategory extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getParentNode(): boolean;
    setParentNode(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DemoCategory.AsObject;
    static toObject(includeInstance: boolean, msg: DemoCategory): DemoCategory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DemoCategory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DemoCategory;
    static deserializeBinaryFromReader(message: DemoCategory, reader: jspb.BinaryReader): DemoCategory;
}

export namespace DemoCategory {
    export type AsObject = {
        id: number,
        name: string,
        parentNode: boolean,
    }
}

export class GetDemoRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDemoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDemoRequest): GetDemoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDemoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDemoRequest;
    static deserializeBinaryFromReader(message: GetDemoRequest, reader: jspb.BinaryReader): GetDemoRequest;
}

export namespace GetDemoRequest {
    export type AsObject = {
        id: number,
    }
}

export class GetDemoViaNameRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDemoViaNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDemoViaNameRequest): GetDemoViaNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDemoViaNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDemoViaNameRequest;
    static deserializeBinaryFromReader(message: GetDemoViaNameRequest, reader: jspb.BinaryReader): GetDemoViaNameRequest;
}

export namespace GetDemoViaNameRequest {
    export type AsObject = {
        name: string,
    }
}

export class GetDemoOrderRequest extends jspb.Message { 
    getOrderId(): number;
    setOrderId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDemoOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDemoOrderRequest): GetDemoOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDemoOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDemoOrderRequest;
    static deserializeBinaryFromReader(message: GetDemoOrderRequest, reader: jspb.BinaryReader): GetDemoOrderRequest;
}

export namespace GetDemoOrderRequest {
    export type AsObject = {
        orderId: number,
    }
}
