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
          IDBan:Number(req.body.IDBan),
          IDKhachHang: req.body.IDKhachHang,
          TrangThai: req.body.TrangThai,
          PhuongThuc: req.body.PhuongThuc,
          NgayLap: Date(req.body.NgayLap),
          Detail:JSON.parse(req.body.Detail),   
        };
        var detailQuery="";
        var congThucQuery="select NguyenLieu.IDNguyenLieu, NguyenLieu.SoLuongTon, CongThuc.SoLuong From NguyenLieu,CongThuc where CongThuc.IDNguyenLieu = NguyenLieu.IDNguyenLieu and (";
        item.Detail.forEach((data)=>{
          var temp="Insert into CT_HoaDon(IDHoaDon,IDMonAn,SoLuong,GiaBan) values("+ item.ID+","+data.IDMonAn+","+ data.quantity+","+data.GiaBan+")\n";
          congThucQuery=congThucQuery.concat("CongThuc.IDMon="+ data.IDMonAn + "or") ;
          detailQuery=detailQuery.concat(temp);
        });      
        var request = new sql.Request();
        var result = await request.query(congThucQuery);
        console.log(result.recordset);
        // request
        //   .input("IDBan", sql.Int, item.IDBan)
        //   .input("IDKhachHang", sql.Int, item.IDKhachHang)
        //   .input("TrangThai", sql.Int, item.TrangThai)
        //   .input("IDPhuongThuc", sql.Int, item.PhuongThuc)
        //   .input("NgayLap", sql.DateTime, item.NgayLap);
        // var sql_query =
        //   "Insert into HoaDon(IDBan,IDKhachHang,TrangThai,IDPhuongThuc,NgayLap) values(@IDBan,@IDKhachHang,@TrangThai,@IDPhuongThuc,@NgayLap)\n";
        // sql_query=sql_query.concat(detailQuery);  
        // await request.query(sql_query);
      } catch (err) {
        console.log(err);
        res.send("Không thành công!");
      }
    }
}
module.exports = new hoaDonController();