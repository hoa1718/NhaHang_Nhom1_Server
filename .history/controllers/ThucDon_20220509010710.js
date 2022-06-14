const sql = require("mssql");
class thucDonController{
   async index(req,res,next){
      var request = new sql.Request();
      request.query('select * from MonAn', function (err, recordset) {
          if (err) console.log(err)
          res.send({result:recordset.recordset});
          
      });
}}
module.exports = new thucDonController();