const sql = require("mssql");
class thucDonController{
    index(req,res,next){
      var request = new sql.Request();
      request.query(await'select * from MonAn', function (err, recordset) {
          if (err) console.log(err)
          await res.send({result:recordset.recordset});
          
      });
}}
module.exports = new thucDonController();