const session = require('express-session')
const cookie= require('cookie');
class LoginController{
    async handleLogin(req,res,next){
        try{
            const username= req.body.username;
            const password= req.body.password;
            
            if(username==="admin" && password==="123"){
                res.cookie("role", "admin");
                await res.send(req.cookies.role);
            }
            else
            if(username=="nv123" && password=="456"){
                res.cookie("role", "nv",);
                await res.send(req.cookies.role);
            }
            else{
                res.status(502).send({
                    message: 'Sai Mat Khau'
                 }); 
            }
        }
        catch(err){
            res.status(502).send({
                message: 'Sai Ten Dang Nhap hoac Mat Khau'
             });
        }
       
    }
}
module.exports = new LoginController();