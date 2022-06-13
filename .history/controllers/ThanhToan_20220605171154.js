const sql = require("mssql");
var ban;
class thanhToanController {
    async listBan(req,res,next){
        var request = new sql.Request();        
        var sql_query =
          "select count(SoBan) as Length from BanAn";
        await request.query(sql_query, function (err, recordset) {
          if (err) res.send(err);
          ban = new Array(Number(recordset.recordset[0].Length))
          ban.forEach(item=>{
            item=[];
          })
          ban[1].push(
            {
                "IDMon": 24,
                "TenMon": "Bò lúc lắc",
                "GiaTien": 50000,
                "GiaBan": 80000,
                "IDPhanLoai": 1,
                "TenPhanLoai": "Món chính",
                "Image": "http://localhost:4000/Bò lúc lắc.jpeg",
                "quantity": 1
            }
        ])
          console.log(ban[1]);
          res.send({ result: recordset.recordset[0] });
        });
    }
    async listOrder(req,res,next){

    }
   
}
module.exports = new thanhToanController();