/**
 * Created by Administrator on 2017/7/10.
 */
module.exports = app => {
    class HomeController extends app.Controller{
        * index(){
            this.ctx.body = 'hello blue';
        }
    }
    return HomeController;
}