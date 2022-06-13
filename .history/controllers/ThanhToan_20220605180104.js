const sql = require("mssql");
var ban;
class thanhToanController {
    async listBan(req,res,next){
      try{

      }
      catch(err){
        console.log(err);
        res.send("Không thành công!");
      }
       
    }
    async listOrder(req,res,next){

    }
   
}
module.exports = new thanhToanController();