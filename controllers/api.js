const APIError = require('../rest').APIError;
const products = require('./../products');
const crypto = require('crypto');

module.exports = {

    'GET /':async (ctx, next) => {

        var signature = ctx.request.query.signature;
        var timestamp = ctx.request.query.timestamp;
        var nonce = ctx.request.query.nonce;
        var echostr = ctx.request.query.echostr;

        var token = 'liulin';
        /*  加密/校验流程如下： */
        //1. 将token、timestamp、nonce三个参数进行字典序排序
        var array = new Array(token,timestamp,nonce);
        array.sort();
        var str = array.toString().replace(/,/g,"");

        //2. 将三个参数字符串拼接成一个字符串进行sha1加密
        var sha1Code = crypto.createHash("sha1");
        var code = sha1Code.update(str,'utf-8').digest("hex");
        console.log(code)
        //3. 开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
        if(code === signature){
        // if(code !== signature){
            console.log(ctx.response)
            ctx.response.type = 'application/json';
            ctx.response.body = echostr;
        }else{
            console.log(ctx.response)
            ctx.response.type = 'application/json';
            ctx.response.body = "error";
        }
    },

    'GET /api/productsList':async (ctx, next) => {

        // 根据数据库查询的结果分别抛出不同异常
        if (products.getProducts() != null) {
            ctx.rest({
                code:200,
                data: products.getProducts(),
                msg:"执行成功"
            });
        } else {
            throw new APIError('123', '产品数据不存在');
        }
    },

    'POST /api/createProduct':async (ctx, next) => {
        console.log(ctx.request.body);
        var p = products.createProduct(ctx.request.body.name,ctx.request.body.manufacturer,parseFloat(ctx.request.body.price));
        ctx.rest({
            code:200,
            data: p,
            msg:"执行成功"
        });
    },

    'POST /api/createProduct':async (ctx, next) => {
        console.log(ctx.request.body);
        var p = products.createProduct(ctx.request.body.name,ctx.request.body.manufacturer,parseFloat(ctx.request.body.price));
        ctx.rest({
            code:200,
            data: p,
            msg:"执行成功"
        });
    }



}

