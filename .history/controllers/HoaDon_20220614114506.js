const sql = require("mssql");
const {initializeCustomer,initializeBill}= require('../config/firebase');
class hoaDonController {
    async lastID(req,res,next){
        var request = new sql.Request();
        var sql_query =
          "select Max(IDHoaDon) as Length from HoaDon";
        await request.query(sql_query, async function (err, recordset) {
           if (err) res.send(err);
           console.log(recordset.recordset[0]);
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
        const itemFirebase= await{
          IDTable:Number(req.body.IDBan),
          CardID:req.body.IDKhachHang,
          Date:req.body.NgayLap,
          IDVoucher:1,
          PriceSale:0,
          Detail:JSON.parse(req.body.DetailFirebase)
        }
        var detailQuery="";
        var congThucQuery="select NguyenLieu.IDNguyenLieu, NguyenLieu.SoLuongTon, sum(CongThuc.SoLuong) as SoLuong From NguyenLieu,CongThuc where CongThuc.IDNguyenLieu = NguyenLieu.IDNguyenLieu and (";
        item.Detail.forEach((data)=>{
          var temp="Insert into CT_HoaDon(IDHoaDon,IDMonAn,SoLuong,GiaBan) values("+ item.ID+","+data.IDMonAn+","+ data.quantity+","+data.GiaBan+")\n";
          congThucQuery=congThucQuery.concat("CongThuc.IDMon="+ data.IDMonAn + "or ") ;
          detailQuery=detailQuery.concat(temp);
        });  
        congThucQuery=congThucQuery.slice(0,congThucQuery.length-3)+") \n group by NguyenLieu.IDNguyenLieu,NguyenLieu.SoLuongTon";    
        var request = new sql.Request();
        var quantityChange = await (await request.query(congThucQuery)).recordset;
        var updateStock="";
        await quantityChange.forEach((data)=>{
          let temp=data.SoLuongTon - data.SoLuong;
          updateStock= updateStock.concat("Update NguyenLieu set SoLuongTon="+temp+" where IDNguyenLieu="+data.IDNguyenLieu +"\n");
        })
        request
          .input("IDBan", sql.Int, item.IDBan)
          .input("IDKhachHang", sql.Int, item.IDKhachHang)
          .input("TrangThai", sql.Int, item.TrangThai)
          .input("IDPhuongThuc", sql.Int, item.PhuongThuc)
          .input("NgayLap", sql.DateTime, item.NgayLap);
        var sql_query =
          "Insert into HoaDon(IDBan,IDKhachHang,TrangThai,IDPhuongThuc,NgayLap) values(@IDBan,@IDKhachHang,@TrangThai,@IDPhuongThuc,@NgayLap)\n";
        sql_query=sql_query.concat(detailQuery);  
        sql_query=sql_query.concat(updateStock); 
        const firebase= initializeBill();
        const res= firebase.firestore().collection('bills').doc(String(item.ID)).set(itemFirebase)
        await request.query(sql_query);
      } catch (err) {
        console.log(err);
        res.send("Kh??ng th??nh c??ng!");
      }
    }
  
}
module.exports = new hoaDonController();