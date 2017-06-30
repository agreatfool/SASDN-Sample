import {RpcApplication} from "sasdn";
import {registerServices} from "./services/register";

const debug = require('debug')('SASDN:Application');
const app = new RpcApplication();

app.use(async function (ctx, next) {
    console.log('>> one');
    await next();
    console.log('<< one');
});
app.use(async function (ctx, next) {
    console.log('>> two');
    await next();
    console.log('<< two');
});
app.use(async function (ctx, next) {
    console.log('>> three');
    await next();
    console.log('<< three');
});

registerServices(app);

app.bind('127.0.0.1:50051').start();