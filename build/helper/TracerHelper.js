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
const zipkin = require("zipkin");
const TransportHttp = require("zipkin-transport-http");
const CLSContext = require("zipkin-context-cls");
const ConfigHelper_1 = require("./ConfigHelper");
class TracerHelper {
    static instance() {
        if (TracerHelper._instance === undefined) {
            TracerHelper._instance = new TracerHelper();
        }
        return TracerHelper._instance;
    }
    constructor() {
        this._tracer = false;
        this._serviceName = 'unknown';
        this._port = 0;
        this._initialized = false;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const options = ConfigHelper_1.ConfigHelper.instance().getOption();
            if (options.tracer !== false) {
                this._tracer = new zipkin.Tracer({
                    ctxImpl: new CLSContext('zipkin'),
                    recorder: new zipkin.BatchRecorder({
                        logger: new TransportHttp.HttpLogger({
                            endpoint: `http://${options.tracer.host}:${options.tracer.port}/api/v1/spans`
                        })
                    }),
                    sampler: new zipkin.sampler.CountingSampler(1),
                });
            }
            this._serviceName = options.name;
            this._port = options.port;
            this._initialized = true;
            return Promise.resolve();
        });
    }
    getTraceInfo(isRequest, remoteServiceName) {
        if (!this._initialized) {
            throw new Error('[Tracer] Tracer Instance has not initialized!');
        }
        const traceInfo = {};
        traceInfo.tracer = this._tracer;
        traceInfo.serviceName = this._serviceName;
        traceInfo.port = (isRequest) ? this._port : 0;
        if (remoteServiceName) {
            traceInfo.remoteServiceName = remoteServiceName;
        }
        return traceInfo;
    }
}
exports.TracerHelper = TracerHelper;
//# sourceMappingURL=TracerHelper.js.map