const session = require('express-session')
const cookie= req;
class LoginController{
    async handleLogin(req,res,next){
        const username= req.body.username;
        const password= req.body.password;
        if(username != "admin" || username!="nv123"){
           await res.send({err:"Sai ten dang nhap"});
        }
        if(username=="admin" && password=="123"){
           await res.cookie("role", "admin");
            
        }
        if(username=="nv123" && password=="456"){
            await res.cookie("role", "nv")
        }
    }
}
module.exports = new LoginController();