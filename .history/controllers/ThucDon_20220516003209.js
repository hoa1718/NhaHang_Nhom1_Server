const sql = require("mssql");
class thucDonController{
    index(req,res,next){
      var request = new sql.Request();
      var sql_query="select IDMon,TenMon,GiaTien,TenPhanLoai,Image from MonAn,PhanLoai where MonAn.IDPhanLoai=PhanLoai.IDPhanLoai"
        request.query(sql_query, function (err, recordset) {
            if (err)res.send(err) 
            res.send({result:recordset.recordset});
        }); 
}}
    create(req,res,next){
      const item = {
        TenMon:req.query.TenMon,
        GiaTien:req.query.GiaTien,
        IDPhanLoai:req.query.IDPhanLoai,
        Image:"a",
      }
      var request = new sql.Request();
      var sql_query ="Insert into MonAn (TenMon,GiaTien,IDPhanLoai,Image) values("+ item.TenMon +','+item.GiaTien +','+item.IDPhanLoai+','+item.Image +')',
      
    }
module.exports = new thucDonController();