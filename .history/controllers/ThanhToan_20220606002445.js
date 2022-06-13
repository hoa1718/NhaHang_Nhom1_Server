const sql = require("mssql");
var ban=[];
class thanhToanController {
    async listBan(req,res,next){
      try{
        var request = new sql.Request();        
        var sql_query =
          "select count(SoBan) as Length from BanAn";
        await request.query(sql_query, function (err, recordset) {
          if (err) res.send(err);
          res.send({ result: recordset.recordset[0] });
        });
      }
      catch(err){
        console.log(err);
        res.send("Không thành công!");
      }  
    }
    async listOrder(req,res,next){
      try{
          res.send(JSON.stringify(ban)); 
      }
      catch(err){
        console.log(err);
        res.send("Không thành công!");
      } 
    }
   async saveOrder(req,res,next){
     try{

     }
     catch(err){
      console.log(err);
      res.send("Không thành công!");
     }
   }
}
module.exports = new thanhToanController();