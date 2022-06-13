const sql = require("mssql");
const ban=[];
class thanhToanController {
    async listBan(req,res,next){
        var request = new sql.Request();
        ban.push({hello:"hello"});
        console.log(ban[]);
        var sql_query =
          "select count(SoBan) as Length from BanAn";
        await request.query(sql_query, function (err, recordset) {
          if (err) res.send(err);
          res.send({ result: recordset.recordset[0] });
        });
    }
}
module.exports = new thanhToanController();