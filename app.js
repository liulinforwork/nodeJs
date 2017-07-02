const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
// const router  = require('koa-router')();

const controller = require('./controller');

const app = new Koa();

// parse request body:
app.use(bodyParser());
// add router middleware:
// app.use(router.routes());

app.use(controller());


app.use(async(ctx, next) => {
    await next();
    ctx.type = 'text/html';
    ctx.body = '<h1>nodejs dmeo ya!</h1>'
})
app.listen(3000);

console.log("server already start...");

