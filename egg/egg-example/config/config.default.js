'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1499653272848_4545';

  // add your config here
  // config/config.default.js


  return config;
};
// module.exports = {
//   // 加载 errorHandler 中间件
//   middleware: [ 'errorHandler' ],
//   // 只对 /api 前缀的 url 路径生效
//   errorHandler: {
//     match: '/api',
//   },
// };