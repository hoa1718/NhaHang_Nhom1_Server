const sql = require("mssql");
const customer= require("../config/customer");
var ban=new Array(50);
class thanhToanController {
    async listBan(req,res,next){
      try{
        var request = new sql.Request();        
        var sql_query =
          "select count(SoBan) as Length from BanAn";
        await request.query(sql_query, function (err, recordset) {
          if (err) res.send(err);
          res.send({ result: recordset.recordset[0],
                     orders: ban});
        });
      }
      catch(err){
        console.log(err);
        res.send("Không thành công!");
      }  
    }
    async listOrder(req,res,next){
      try{
          res.send(JSON.stringify(ban)); 
      }
      catch(err){
        console.log(err);
        res.send("Không thành công!");
      } 
    }
   async saveOrder(req,res,next){
     try{
      const item = await {
        IDBan:Number(req.body.IDBan),
        Detail:JSON.parse(req.body.Detail),   
      };
      ban[req.body.IDBan]=item.Detail;
      res.send("Save")
     }
     catch(err){
      console.log(err);
      res.send("Không thành công!");
     }
   }
   async deleteOrder(req,res,next){
    try{
        var id = Number(req.params.id);
        ban[id]=null;
        res.send("Deleted !!!"); 
    }
    catch(err){
      console.log(err);
      res.send("Không thành công!");
    } 
  }
  async findCustomer(req,res,next){
    
  }
}
module.exports = new thanhToanController();