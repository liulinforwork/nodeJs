const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');

const controller = require('./controller');

const app = new Koa();

app.use(bodyParser());
app.use(cors());
app.use(controller());

app.use(async(ctx, next) => {
    await next();
    ctx.type = 'text/html';
    ctx.body = '<h1>下雨了呢.</h1>'
})

app.listen(3000);

console.log("server already start...");

