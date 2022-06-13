const sql = require("mssql");
class hoaDonController {
    async lastID(req,res,next){
        var request = new sql.Request();
        var sql_query =
          "select count(IDHoaDon) as Length from HoaDon";
        await request.query(sql_query, async function (err, recordset) {
           if (err) res.send(err);
           await res.send({ result: recordset.recordset[0] });
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
          NgayLap: Date(req.body.NgayLap),
          Detail:JSON.parse(req.body.Detail),   
        };
        var detailQuery="";
        item.Detail.forEach((data)=>{
          var temp="Insert into CT_HoaDon(IDHoaDon,IDMonAn,SoLuong,GiaBan) values("+ item.ID+","+data.IDMonAn+","+ data.quantity+","+data.GiaBan+")\n";
          detailQuery=detailQuery.concat(temp);
        });
        console.log(item.NgayLap);
        var request = new sql.Request();
        request
          .input("IDHoaDon", sql.Int, item.TenMon)
          .input("IDBan", sql.Float, item.GiaBan)
          .input("IDKhachHang", sql.Float, item.GiaTien)
          .input("TrangThai", sql.Int, item.IDPhanLoai)
          .input("IDPhuongThuc", sql.NVarChar, item.Image)
          .input("NgayLap", sql.NVarChar, item.Image);
        var sql_query =
          "Insert into HoaDon(IDHoaDon,IDBan,IDKhachHang,TrangThai,IDPhuongThuc,NgayLap) values(@IDHoaDon,@IDBan,@IDKhachHang,@TrangThai,@IDPhuongThuc,)\n";
        sql_query=sql_query.concat(congThucQuery);  
        await request.query(sql_query);
      } catch (err) {
        console.log(err);
        res.send("Không thành công!");
      }
    }
}
module.exports = new hoaDonController();