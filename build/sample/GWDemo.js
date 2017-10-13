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
const Koa = require("koa");
const koaBodyParser = require("koa-bodyparser");
const zipkin_instrumentation_koa_1 = require("zipkin-instrumentation-koa");
const Router_1 = require("../router/Router");
const ConfigHelper_1 = require("../helper/ConfigHelper");
const TracerHelper_1 = require("../helper/TracerHelper");
class GWDemo {
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
            yield Router_1.default.instance().init();
            const app = new Koa();
            app.use(zipkin_instrumentation_koa_1.KoaInstrumentation.middleware(TracerHelper_1.TracerHelper.instance().getTraceInfo()));
            app.use(koaBodyParser({ formLimit: '2048kb' })); // post body parser
            app.use(Router_1.default.instance().getRouter().routes());
            this.app = app;
            this._initialized = true;
            return Promise.resolve();
        });
    }
    start() {
        if (!this._initialized) {
            return;
        }
        const options = ConfigHelper_1.ConfigHelper.instance().getOption();
        const host = options.host;
        const port = options.port + 1;
        this.app.listen(port, options.host, () => {
            console.log(`API Gateway Start, Address: ${host}:${port}!`);
        });
    }
}
exports.default = GWDemo;
//# sourceMappingURL=GWDemo.js.map