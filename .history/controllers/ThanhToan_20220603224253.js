const sql = require("mssql");
const ban=[];
class thanhToanController {
    async listBan(req,res,next){
        var request = new sql.Request();        
        var sql_query =
          "select count(SoBan) as Length from BanAn";
        await request.query(sql_query, function (err, recordset) {
          if (err) res.send(err);
          ban.push({hello:recordset.recordset[0]})
          res.send({ result: recordset.recordset[0] });
        });
    }
    async create(req,res,next){
      try {
        const item = await {
          ID:Number(req.body.ID)+1,
          IDBan: req.body.IDBan,
          IDKhachHang: req.body.IDKhachHang,
          TrangThai: req.body.TrangThai,
          PhuongThuc: req.body.PhuongThuc,
          NgayLap: req.body.NgayLap,
          Detail:JSON.parse(req.body.Detail),   
        };
        var detailQuery="";
        item.CongThuc.forEach((data)=>{
          var temp="Insert into CT_HoaDon(IDHoaDon,IDMonAn,SoLuong,GiaBan) values("+ item.ID+","+data.I+","+ data.SoLuong+")\n";
          detailQuery=detailQuery.concat(temp);
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
        res.send("Không thành công!");
      }
    }
}
module.exports = new thanhToanController();