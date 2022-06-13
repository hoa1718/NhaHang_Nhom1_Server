
function connected(){
  var sql = require("mssql");

  // config for your database
  var config = {
      user: 'admin',
      password: '12345',
      server: 'localhost', 
      database: 'Ql_NhaHang',
      trustServerCertificate: true
  };

  // connect to your database
  sql.connect(config, function (err) {
  
      if (err) console.log(err);
      else console.log("Connected !");
      // create Request object
      // var request = new sql.Request();
         
      // // query to the database and get the records
      // request.query('select * from MonAn', function (err, recordset) {
          
      //     if (err) console.log(err)

      //     // send records as a response
      //     console.log({result:recordset.recordset});
          
      // });
  });
}

module.exports={connected};

