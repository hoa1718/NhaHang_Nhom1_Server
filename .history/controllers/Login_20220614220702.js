const session = require('express-session');
class LoginController{
    async handleLogin(req,res,next){
        const username= req.body.username;
        const password= req.body.password;
        if(username != "admin" || username!="nv123"){
            res.send("Sai ten dang nhap");
        }
    }
}
module.exports = new LoginController();