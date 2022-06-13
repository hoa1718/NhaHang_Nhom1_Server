const sql = require("mssql");
var ban;
class thanhToanController {
    async listBan(req,res,next){
      try{
        var request = new sql.Request();        
        var sql_query =
          "select count(SoBan) as Length from BanAn";
        await request.query(sql_query, function (err, recordset) {
          if (err) res.send(err);
          ban = new Array(Number(recordset.recordset[0].Length))
          for(let i=0;i<ban.length;i++){
            ban[i]=[];
          } 
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
          res.send(ban); 
      }
      catch(err){
        console.log(err);
        res.send("Không thành công!");
      } 
    }
   
}
module.exports = new thanhToanController();