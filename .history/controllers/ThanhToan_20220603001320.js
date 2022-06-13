const sql = require("mssql");
class thanhToanController {
    async listBan(req,res,next){
        var request = new sql.Request();
        var sql_query =
          "select IDMon,TenMon,GiaBan,MonAn.IDPhanLoai,TenPhanLoai,Image from MonAn,PhanLoai where MonAn.IDPhanLoai=PhanLoai.IDPhanLoai";
        await request.query(sql_query, function (err, recordset) {
          if (err) res.send(err);
          res.send({ result: recordset.recordset });
        });
    }
}
module.exports = new thanhToanController();