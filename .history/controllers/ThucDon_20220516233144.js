const sql = require("mssql");
const firebase = require('../config/firebase');
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
        const blob = firebase.bucket.file(req.b.filename)
        // const image= req.body.Image;
        // const name = file.originalname.split(".")[0];
        // const type = file.originalname.split(".")[1];
        // const fileName = `${name}.${type}`;
        // const imageRef = storage.child(fileName);
        // // Step 2. Upload the file in the bucket storage
        // const snapshot = await imageRef.put(file.buffer);
        // // Step 3. Grab the public url
        // const downloadURL = await snapshot.ref.getDownloadURL();
        const item = await {
        TenMon:req.body.TenMon,
        GiaBan:req.body.GiaBan,
        GiaTien:req.body.GiaTien,
        IDPhanLoai:req.body.IDPhanLoai,
        Image:"downloadURL",
      };
      var request = new sql.Request();
      request.input("TenMon",sql.NVarChar,item.TenMon)
      .input("GiaBan",sql.Float,item.GiaBan)
      .input("GiaTien",sql.Float,item.GiaTien)
      .input("IDPhanLoai",sql.Int,item.IDPhanLoai)
      .input("Image",sql.NVarChar,item.Image)
      var sql_query="Insert into MonAn(TenMon,GiaBan,GiaTien,IDPhanLoai,Image) values(@TenMon,@GiaBan,@GiaTien,@IDPhanLoai,@Image)"
      await request.query(sql_query)}  
      catch (err) {
        console.dir(err);
      }
    }
   
}
module.exports = new thucDonController();