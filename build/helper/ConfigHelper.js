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
const LibFs = require("mz/fs");
const defaultConfigs = {
    name: 'unknown',
    host: '127.0.0.1',
    port: 8080,
    tracer: false
};
class ConfigHelper {
    static instance() {
        if (ConfigHelper._instance === undefined) {
            ConfigHelper._instance = new ConfigHelper();
        }
        return ConfigHelper._instance;
    }
    constructor() {
        this._initialized = false;
    }
    init(configPath) {
        return __awaiter(this, void 0, void 0, function* () {
            let stats = yield LibFs.stat(configPath);
            // validate file is exist
            if (!stats.isFile()) {
                throw new Error(`[Config] Invalid path, config:${configPath}`);
            }
            this._configs = ConfigHelper.mergerObject(defaultConfigs, require(configPath));
            this._initialized = true;
            return Promise.resolve();
        });
    }
    getOption() {
        if (!this._initialized) {
            throw new Error('[Config] Config Instance has not initialized!');
        }
        return this._configs;
    }
    static mergerObject(object, newObject) {
        for (let key in newObject) {
            object[key] = newObject[key];
        }
        return object;
    }
}
exports.ConfigHelper = ConfigHelper;
//# sourceMappingURL=ConfigHelper.js.map