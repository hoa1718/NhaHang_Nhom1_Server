const sql = require("mssql");
class thucDonController{
    index(req,res,next){
      var request = new sql.Request();
      var sql_query="select IDMon,TenMon,GiaBan,TenPhanLoai,Image from MonAn,PhanLoai where MonAn.IDPhanLoai=PhanLoai.IDPhanLoai"
        request.query(sql_query, function (err, recordset) {
            if (err)res.send(err) 
            res.send({result:recordset.recordset});
        }); 
      }
    async create(req,res,next){
      try{ 
        const item = await {
        TenMon:req.body.TenMon,
        GiaBan:req.query.GiaBan,
        GiaTien:req.query.GiaTien,
        IDPhanLoai:req.query.IDPhanLoai,
        Image:"a",
      };
      var request = new sql.Request();
      var sql_query = "Insert into MonAn (TenMon,GiaBan,GiaTien,IDPhanLoai,Image) values("+ item.TenMon +','+item.GiaBan +','+item.GiaTien +','+item.IDPhanLoai+','+item.Image +')';
      await request.query(sql_query)}  
      catch (err) {
        console.dir(err);
      }
    }
   
}
module.exports = new thucDonController();