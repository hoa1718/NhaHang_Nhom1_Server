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
        GiaBan:req.body.GiaBan,
        GiaTien:req.body.GiaTien,
        IDPhanLoai:req.body.IDPhanLoai,
        Image:"http://localhost:4000/"+req.file.filename,
      };
      console.log(req.file);
      var request = new sql.Request();
      request.input("TenMon",sql.NVarChar,item.TenMon)
      .input("GiaBan",sql.Float,item.GiaBan)
      .input("GiaTien",sql.Float,item.GiaTien)
      .input("IDPhanLoai",sql.Int,item.IDPhanLoai)
      .input("Image",sql.NVarChar,item.Image)
      var sql_query="Insert into MonAn(TenMon,GiaBan,GiaTien,IDPhanLoai,Image) values(@TenMon,@GiaBan,@GiaTien,@IDPhanLoai,@Image)"
      await request.query(sql_query)
    }  
      catch (err) {
        console.dir(err);
      }
    }
    async detail(req,res,next){
      var request = new sql.Request();
      var id = Number(req.params.id);
      var sql_query="select IDMon,TenMon,GiaBan,TenPhanLoai,Image from MonAn,PhanLoai where MonAn.IDPhanLoai=PhanLoai.IDPhanLoai and MonAn.IDMon ="+ id;
      console.log(sql_qur);
        request.query(sql_query, function (err, recordset) {
            if (err)res.send(err) 
            res.send({result:recordset.recordset});
        });
    }
   
}
module.exports = new thucDonController();