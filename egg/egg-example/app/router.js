'use strict';

// module.exports = app => {
//   app.get('/', 'home.index');
// };

// app/router.js
module.exports = app => {
  app.resources('topics', '/api/v2/topics', 'topics');
};