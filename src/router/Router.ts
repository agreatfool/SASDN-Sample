"use strict";

import * as Router from 'koa-router'

const API_PATHS = [
    "../router/BookApiService/postGetBookApi",
    "../router/BookApiService/postGetBooksViaAuthorApi",
    "../router/BookApiService/postUpdateBooksApi",
];

export default class RouteLoader {
    private static _instance: RouteLoader;

    private initialized: boolean;
    private router: Router;

    private constructor() {
        this.initialized = false;
        this.router = new Router();
    }

    public static instance(): RouteLoader {
        if (RouteLoader._instance === undefined) {
            RouteLoader._instance = new RouteLoader();
        }
        return RouteLoader._instance;
    }

    public init(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            // create koa-router
            let queue = [] as Array<Promise<void>>;
            for (let path of API_PATHS) {
                queue.push(this._createRouter(path));
            }

            // promise queue
            Promise.all(queue).then(() => {
                this.initialized = true;
                resolve(true);
            }).catch((err: Error) => {
                reject(err);
            });
        });
    }

    public getRouter(): Router {
        return this.router
    }

    private async _createRouter(path: string): Promise<void> {
        try {
            let api = require(path).default;
            this.router[api.method].apply(this.router, api.register());
        } catch (err) {
            console.error(err.toString());
        }
    }
}