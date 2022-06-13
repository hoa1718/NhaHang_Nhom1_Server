const sql = require("mssql");
const ban=[];
class thanhToanController {
    async listBan(req,res,next){
        var request = new sql.Request();        
        var sql_query =
          "select count(SoBan) as Length from BanAn";
        await request.query(sql_query, function (err, recordset) {
          if (err) res.send(err);
          ban.push({hello:recordset.recordset[0]})
          res.send({ result: recordset.recordset[0] });
        });
    }
    async create(req,res,next){
      
    }
}
module.exports = new thanhToanController();