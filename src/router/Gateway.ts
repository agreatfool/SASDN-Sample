import * as Koa from 'koa'
import * as koaBodyParser from 'koa-bodyparser'
import RouterLoader from './Router'

class App {
    private initialized: boolean;
    public app: Koa;

    constructor() {
        this.initialized = false;
    }

    public init() {
        return new Promise((resolve, reject) => {
            Promise.resolve()
                .then(() => {
                    let initQueue = [
                        RouterLoader.instance().init()
                    ];
                    return Promise.all<any>(initQueue);
                })
                .then(() => {
                    return this.initialize();
                })
                .then(() => {
                    this.initialized = true;
                    resolve();
                })
                .catch((err) => {
                    reject(err);
                });
        })
    }

    private initialize(): Promise<any> {
        return new Promise((resolve) => {
            this.app = new Koa();
            this.app.use(koaBodyParser({formLimit: '2048kb'})); // post body parser
            this.app.use(RouterLoader.instance().getRouter().routes());
            resolve();
        });
    }

    public start(): void {
        if (!this.initialized) {
            return;
        }

        // server start
        this.app.listen(8080, "127.0.0.1", () => {
            console.log("Gateway start!");
        });
    }
}

export default new App();