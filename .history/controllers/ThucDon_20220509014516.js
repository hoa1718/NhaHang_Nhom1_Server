const sql = require("mssql");
class thucDonController{
    index(req,res,next){
      var request = new sql.Request()
      .then( request.query('select * from MonAn', function (err, recordset) {
        if (err) console.log(err)

        res.send({result:recordset.recordset});
        
    });)
      try{
       
      }

     
}}
module.exports = new thucDonController();