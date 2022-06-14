const session = require('express-session');
class LoginController{
    async handleLogin(req,res,next){
        console.log(req.body.password);
    }
}
module.exports = new LoginController();