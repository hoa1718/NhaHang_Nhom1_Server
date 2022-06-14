const session = require('express-session')
const cookie= require('cookie');
class LoginController{
    async handleLogin(req,res,next){
        try{
             const username= req.body.username;
            const password= req.body.password;
            if(username != "admin" || username!="nv123"){
               res.send({err:"Sai ten dang nhap"});
            }
            if(username=="admin" && password=="123"){
               await res.cookie("role", "admin");
               res.send('Cookie have been saved successfully');
            }
            if(username=="nv123" && password=="456"){
                await cookie.serialize("role", "nv")
            }
        }
        catch(err){
            res.send(err)
        }
       
    }
}
module.exports = new LoginController();