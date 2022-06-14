const session = require('express-session')
const cookie= require('cookie');
class LoginController{
    async handleLogin(req,res,next){
        const username= req.body.username;
        const password= req.body.password;
        if(username != "admin" || username!="nv123"){
           await res.send({err:"Sai ten dang nhap"});
        }
        if(username=="admin" && password=="123"){
           await res.cookie.serialize("role", "admin");
            console.log(cookie);
        }
        if(username=="nv123" && password=="456"){
            await cookie.serialize("role", "nv")
        }
    }
}
module.exports = new LoginController();