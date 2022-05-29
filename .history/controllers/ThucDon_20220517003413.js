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
        Image:'http://localhost:4000/'+req.body.Image.filename,
      };
      console.log(req.Image);
      v
    }  
      catch (err) {
        console.dir(err);
      }
    }
   
}
module.exports = new thucDonController();