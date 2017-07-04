const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');

const controller = require('./controller');
const rest = require('./rest');

const app = new Koa();
// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

app.use(cors());
app.use(bodyParser());
app.use(rest.restify());
app.use(controller());

app.listen(3000);
console.log("server already start...");

