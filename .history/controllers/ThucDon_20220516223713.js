const sql = require("mssql");
const firebase = require('../db');  // reference to our db 
const firestore = firebase.firestore(); // if using firestore
require("firebase/storage"); // must be required for this to work
const storage = firebase.storage().ref(); // create a reference to storage
global.XMLHttpRequest = require("xhr2"); // must be used to avoid bug
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
        Image:"a",
      };
      var request = new sql.Request();
      request.input("TenMon",sql.NVarChar,item.TenMon)
      .input("GiaBan",sql.Float,item.GiaBan)
      .input("GiaTien",sql.Float,item.GiaTien)
      .input("IDPhanLoai",sql.Int,item.IDPhanLoai)
      .input("Image",sql.NVarChar,"a")
      var sql_query="Insert into MonAn(TenMon,GiaBan,GiaTien,IDPhanLoai,Image) values(@TenMon,@GiaBan,@GiaTien,@IDPhanLoai,@Image)"
      await request.query(sql_query)}  
      catch (err) {
        console.dir(err);
      }
    }
   
}
module.exports = new thucDonController();