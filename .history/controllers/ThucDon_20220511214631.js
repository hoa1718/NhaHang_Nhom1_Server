const sql = require("mssql");
class thucDonController{
    index(req,res,next){
      var request = new sql.Request();
        request.query('select * from MonAn', function (err, recordset) {
            if (err)res.send(err) 
            res.se({result:recordset.recordset});
        }); 
}}
module.exports = new thucDonController();