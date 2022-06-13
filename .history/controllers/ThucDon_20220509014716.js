const sql = require("mssql");
class thucDonController{
    index(req,res,next){
      var request = new sql.Request()
      .then(request=> {request.query('select * from MonAn', function (err, recordset) {
        if (err) console.log(err)

        res.send({result:recordset.recordset});
      }
      )
    .catch(next)    
}}
module.exports = new thucDonController();