const APIError = require('../rest').APIError;
const products = require('./../products');

module.exports = {
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
    // 'GET /api/getProduct:id':async (ctx, next) => {
    //     console.log(ctx.params);
    //     ctx.rest({
    //         code:200,
    //         data: products.getProduct(ctx.params.id),
    //         msg:"执行成功"
    //     });
    // },
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

