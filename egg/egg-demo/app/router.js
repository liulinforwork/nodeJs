/**
 * Created by Administrator on 2017/7/10.
 */
module.exports = app => {
    app.get('/',app.controller.home.index);
}