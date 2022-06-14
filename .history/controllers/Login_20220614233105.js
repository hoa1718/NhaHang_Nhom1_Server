const session = require('express-session')
const cookie= require('cookie');
class LoginController{
    async handleLogin(req,res,next){
        try{
            const username= req.body.username;
            const password= req.body.password;
            
            if(username==="admin" && password==="123"){
                cookie("role", "admin");
                res.send(cookies.role);
            }
            if(username=="nv123" && password=="456"){
                res.cookie("role", "nv",{});
                res.send('Cookie have been saved successfully');
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