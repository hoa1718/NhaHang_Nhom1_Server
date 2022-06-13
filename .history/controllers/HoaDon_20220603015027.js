const sql = require("mssql");
class hoaDonController {
    async lastID(req,res,next){
        var request = new sql.Request();
        var sql_query =
          "select count(IDHoaDon) as Length from HoaDon";
        await request.query(sql_query, function (err, recordset) {
          if (err) res.send(err);
          res.send({ result: recordset.recordset[0] });
        });
    }
}
module.exports = new hoaDonController();