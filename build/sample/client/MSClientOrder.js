"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = require("grpc");
const zipkin_instrumentation_grpcjs_1 = require("zipkin-instrumentation-grpcjs");
const order_grpc_pb_1 = require("../../proto/order/order_grpc_pb");
const TracerHelper_1 = require("../../helper/TracerHelper");
const ConfigHelper_1 = require("../../helper/ConfigHelper");
class MSClientOrder {
    constructor(ctx) {
        const options = ConfigHelper_1.ConfigHelper.instance().getOption();
        this.client = zipkin_instrumentation_grpcjs_1.GrpcInstrumentation.proxyClient(new order_grpc_pb_1.OrderServiceClient(`${options.host}:${options.port}`, grpc.credentials.createInsecure()), ctx, TracerHelper_1.TracerHelper.instance().getTraceInfo(true, 'order'));
    }
    getOrder(request) {
        return new Promise((resolve, reject) => {
            this.client.getOrder(request, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }
}
exports.default = MSClientOrder;
//# sourceMappingURL=MSClientOrder.js.map