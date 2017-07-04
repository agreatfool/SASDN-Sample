import * as Koa from 'koa';
import * as koaBodyParser from 'koa-bodyparser';
import RouterLoader from './router/Router';

class App {
    private _initialized: boolean;
    public app: Koa;

    constructor() {
        this._initialized = false;
    }

    public init(): Promise<any> {
        return new Promise((resolve, reject) => {
            RouterLoader.instance().init()
                .then(() => {
                    this.app = new Koa();
                    this.app.use(koaBodyParser({formLimit: '2048kb'})); // post body parser
                    this.app.use(RouterLoader.instance().getRouter().routes());
                })
                .then(() => {
                    this._initialized = true;
                    resolve();
                })
                .catch((err) => {
                    reject(err);
                });
        })

    }

    public start(): void {
        if (!this._initialized) {
            return;
        }

        // server start
        this.app.listen(8080, "127.0.0.1", () => {
            console.log("Demo Start, Address: 127.0.0.1:8080!");
        });
    }
}

// App Start
let app = new App();
app.init()
    .then(() => {
        app.start();
    })
    .catch((err) => {
        console.log(err.message);
    });