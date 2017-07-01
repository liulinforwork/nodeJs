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

app.listen(3000);

console.log("server already start...");

