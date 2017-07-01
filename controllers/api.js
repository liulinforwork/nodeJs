

const products = [{
    name:'iphone',
    price:6999
},{
    name: 'liulin',
    price: 999
}];

module.exports = {
    'GET /api/products':async (ctx, next) => {
        // 设置Content-Type
        ctx.response.type = 'application/json';
        ctx.response.body = {
            products:products
        }
    }
}

