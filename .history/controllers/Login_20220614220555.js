const session = require('express-session');
class LoginController{
    async handleLogin(req,res,next){
        const username= req.body.username;
        const pas= req.body.pas;
    }
}
module.exports = new LoginController();