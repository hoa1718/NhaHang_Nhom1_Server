const sql = require("mssql");
class thucDonController{
    index(req,res,next){
      var request = new sql.Request();
      var q
        request.query('select * from MonAn', function (err, recordset) {
            if (err)res.send(err) 
            res.send({result:recordset.recordset});
        }); 
}}
module.exports = new thucDonController();