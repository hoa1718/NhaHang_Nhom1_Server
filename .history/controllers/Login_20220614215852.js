const session = require('express-session');
class LoginController{
    async handleLogin(req,res,next){
        console.log(req);
    }
}
module.exports = new LoginController();