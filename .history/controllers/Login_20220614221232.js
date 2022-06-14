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
                website: 'anonystick.com',
                type: 'blog javascript',
                like: '4550'
            }
        }
}}
module.exports = new LoginController();