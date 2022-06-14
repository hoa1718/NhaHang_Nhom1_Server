const session = require('express-session');
class LoginController{
    async handleLogin(req,res,next){
        const username= req.body.username;
        const password= req.body.password;
        if(username != "admin" || username!="nv123"){
            res.send({err:"Sai ten dang nhap"});
        }
        if(username=="admin" && password=="123"){
            req.session.User = {
                role:"admin",
            }
        }
        if(username=="admin" && password=="123"){
            req.session.User = {
                role:"admin",
            }
        }
    }
}
module.exports = new LoginController();