const sql = require("mssql");
const fs = require('fs');
const { log } = require("console");
class thucDonController {
  async index(req, res, next) {
    var request = new sql.Request();
    var sql_query =
      "select IDMon,TenMon,GiaBan,MonAn.IDPhanLoai,TenPhanLoai,Image from MonAn,PhanLoai where MonAn.IDPhanLoai=PhanLoai.IDPhanLoai";
    await request.query(sql_query, function (err, recordset) {
      if (err) res.send(err);
      res.send({ result: recordset.recordset });
    });
  }
  lastId(req, res, next){
    var request = new sql.Request();
    var sql_query =
      "select Max(IDMon) as Length from MonAn,PhanLoai where MonAn.IDPhanLoai=PhanLoai.IDPhanLoai";
     request.query(sql_query, function (err, recordset) {
      if (err) res.send(err);
      res.send({ result: recordset.recordset[0] });
    });
  }
  listNguyenLieu(req, res, next) {
    var request = new sql.Request();
    var sql_query =
      "select IDNguyenLieu,TenNguyenLieu,DonViTinh,SoLuongTon,DonGia from NguyenLieu,DonViTinh where NguyenLieu.IDDVT=DonViTinh.IDDVT";
     request.query(sql_query, function (err, recordset) {
      if (err) res.send(err);
      res.send({ result: recordset.recordset });
    });
  }
  listPhanLoai(req, res, next) {
    var request = new sql.Request();
    var sql_query =
      "select IDPhanLoai,TenPhanLoai from PhanLoai";
     request.query(sql_query, function (err, recordset) {
      if (err) res.send(err);
      res.send({ result: recordset.recordset });
    });
  }
  async create(req, res, next) {
    try {
      const item = await {
        TenMon: req.body.TenMon,
        GiaBan: req.body.GiaBan,
        GiaTien: req.body.GiaTien,
        IDPhanLoai: req.body.IDPhanLoai,
        CongThuc:JSON.parse(req.body.CongThuc),
        LastID:Number(req.body.LastID)+1,
        Image: "http://localhost:4000/" + req.file.filename,
      };
      var congThucQuery=""
      item.CongThuc.forEach((data)=>{
        var temp="Insert into CongThuc(IDMon,IDNguyenLieu,SoLuong) values("+ item.LastID+","+data.NguyenLieu+","+ data.SoLuong+")\n";
        congThucQuery=congThucQuery.concat(temp);
      });
      var request = new sql.Request();
      request
        .input("TenMon", sql.NVarChar, item.TenMon)
        .input("GiaBan", sql.Float, item.GiaBan)
        .input("GiaTien", sql.Float, item.GiaTien)
        .input("IDPhanLoai", sql.Int, item.IDPhanLoai)
        .input("Image", sql.NVarChar, item.Image);
      var sql_query =
        "Insert into MonAn(TenMon,GiaBan,GiaTien,IDPhanLoai,Image) values(@TenMon,@GiaBan,@GiaTien,@IDPhanLoai,@Image)\n";
      sql_query=sql_query.concat(congThucQuery);  
      await request.query(sql_query);
    } catch (err) {
      console.log(err);
    }
  }
  async detail(req, res, next) {
    var request = new sql.Request();
    var id = Number(req.params.id);
    var sql_query =
      "select IDMon,TenMon,GiaBan,GiaTien,MonAn.IDPhanLoai,TenPhanLoai,Image from MonAn,PhanLoai where MonAn.IDPhanLoai=PhanLoai.IDPhanLoai and MonAn.IDMon =" +
      id+"\n"+
      "select CongThuc.IDNguyenLieu,TenNguyenLieu,SoLuong,DonViTinh from CongThuc,NguyenLieu,DonViTinh where CongThuc.IDMon= "+ id +"and CongThuc.IDNguyenLieu= NguyenLieu.IDNguyenLieu and NguyenLieu.IDDVT=DonViTinh.IDDVT "
      +"\n"+
      "select * from PhanLoai"
    await request.query(sql_query, function (err, recordset) {
      if (err) res.send(err);
      res.send({ food: recordset.recordsets[0],
                 congthuc: recordset.recordsets[1], 
                 phanloai: recordset.recordsets[2]});
    });
  }
  async destroy(req, res, next) {
    try {
      let item= "";
      var request = new sql.Request();
      var id = Number(req.params.id);
      if (id == "undefined") {
        return;
      }
      // var sql_query =
      // "select IDMon,TenMon,GiaBan,GiaTien,TenPhanLoai,Image from MonAn,PhanLoai where MonAn.IDPhanLoai=PhanLoai.IDPhanLoai and MonAn.IDMon =" +id;
      // item=await request.query(sql_query, function (err, recordset) {
      //   if (err) res.send(err);
      //   return recordset.recordset[0];    
      // });
      // var Image=String(item.Image.split('/'))
      // var path="img/"+Image[Image.length-1]
      // fs.unlink(path, (err) => {
      //   if (err) {
      //     console.error(err)
      //   }})
      var sql_query = "Delete from MonAn where MonAn.IDMon =" + id;
      console.log(sql_query);
      await request.query(sql_query, async function (err, recordset) {
        if (err) res.send(err);
        await res.send("Delete!");
      });
    } catch (err) {
      console.log(err);
    }
  }
  async update(req, res, next) {
     try {
      const item = await {
        TenMon: req.body.TenMon,
        GiaBan: req.body.GiaBan,
        GiaTien: req.body.GiaTien,
        IDPhanLoai: req.body.IDPhanLoai,
        CongThuc:JSON.parse(req.body.CongThuc),
        ID:Number(req.body.ID),
        // Image: "http://localhost:4000/" + req.file.filename,
      };
      console.log(item.CongThuc);
      var congThucQuery=""
      item.CongThuc.forEach((data)=>{
        var temp="Insert into CongThuc(IDMon,IDNguyenLieu,SoLuong) values("+ item.ID+","+data.NguyenLieu+","+ data.SoLuong+")\n";
        congThucQuery=congThucQuery.concat(temp);
      });
      var request = new sql.Request();
      request
        .input("TenMon", sql.NVarChar, item.TenMon)
        .input("GiaBan", sql.Float, item.GiaBan)
        .input("GiaTien", sql.Float, item.GiaTien)
        .input("IDPhanLoai", sql.Int, item.IDPhanLoai)
       
      if(req.file === undefined){
        // item.Image="http://localhost:4000/" + req.file.filename;
        // request.input("Image", sql.NVarChar, item.Image);
        var sql_query =
        "Update MonAn set TenMon= @TenMon,GiaBan=@GiaBan,GiaTien=@GiaTien,IDPhanLoai=@IDPhanLoai where IDMon="+item.ID+"\n"+
        "Delete from CongThuc where IDMon="+item.ID+"\n";
        sql_query=sql_query.concat(congThucQuery);  
        console.log(sql_query);
       
    
        
        // await request.query(sql_query);
      }
      // else{
      //   var sql_query =
      //   "Insert into MonAn(TenMon,GiaBan,GiaTien,IDPhanLoai) values(@TenMon,@GiaBan,@GiaTien,@IDPhanLoai)\n"+
      //   "Delete from CongThuc where IDMon="+item.ID;
      //   sql_query=sql_query.concat(congThucQuery);  
      //   await request.query(sql_query);
      // }

    } catch (err) {
      console.log(err);
    }
  }
  async search(req, res, next) {
    try{
      var request = new sql.Request();
      var keyWord = req.params.keyword;
      var sql_query = "select IDMon,TenMon,GiaBan,TenPhanLoai,Image from MonAn,PhanLoai where MonAn.IDPhanLoai=PhanLoai.IDPhanLoai and (MonAn.TenMon LIKE '%"+ keyWord+"%'"+"or MonAn.IDMon LIKE '"+keyWord+"')";
      await request.query(sql_query, async function (err, recordset) {
        if (err) res.send(err);
        await res.send({ result: recordset.recordset });
      });}
    catch(err){
      console.log(err);
    }
  }
}
module.exports = new thucDonController();
