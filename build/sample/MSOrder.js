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
const LibPath = require("path");
const sasdn_1 = require("sasdn");
const zipkin_instrumentation_grpcjs_1 = require("zipkin-instrumentation-grpcjs");
const Register_1 = require("../services/Register");
const ConfigHelper_1 = require("../helper/ConfigHelper");
const TracerHelper_1 = require("../helper/TracerHelper");
class MSOrder {
    constructor() {
        this._initialized = false;
    }
    init(isDev = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const configPath = (isDev)
                ? LibPath.join(__dirname, '..', '..', 'config.dev.json')
                : LibPath.join(__dirname, '..', '..', 'config.json');
            yield ConfigHelper_1.ConfigHelper.instance().init(configPath);
            yield TracerHelper_1.TracerHelper.instance().init();
            const app = new sasdn_1.RpcApplication();
            app.use(zipkin_instrumentation_grpcjs_1.GrpcInstrumentation.middleware(TracerHelper_1.TracerHelper.instance().getTraceInfo()));
            this.app = app;
            this._initialized = true;
            return Promise.resolve();
        });
    }
    start() {
        if (!this._initialized) {
            return;
        }
        Register_1.registerServices(this.app);
        const options = ConfigHelper_1.ConfigHelper.instance().getOption();
        this.app.bind(`${options.host}:${options.port}`).start();
    }
}
exports.default = MSOrder;
//# sourceMappingURL=MSOrder.js.map