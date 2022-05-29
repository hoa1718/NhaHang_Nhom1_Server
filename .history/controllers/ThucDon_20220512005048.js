const sql = require("mssql");
class thucDonController{
    index(req,res,next){
      var request = new sql.Request();
      var sql_query="select IDMon,TenMon,GiaTien,TenPhanLoai,Image from MonAn,PhanLoai where MonAn.IDPhanLoai=PhanLoai.IDPhanLoai"
        request.query(sq, function (err, recordset) {
            if (err)res.send(err) 
            res.send({result:recordset.recordset});
        }); 
}}
module.exports = new thucDonController();